import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'scms.owner@gmail.com';

// Data storage for persistence
const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
}

function loadInquiries(): any[] {
  try {
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading inquiries file:', err);
    return [];
  }
}

function saveInquiry(inquiry: any) {
  try {
    const list = loadInquiries();
    list.unshift(inquiry);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(list.slice(0, 200), null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving inquiry:', err);
  }
}

interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  isConfigured: boolean;
}

// Extract and normalize SMTP configuration from environment
function getSmtpConfig(): SmtpConfig {
  const host = (process.env.SMTP_HOST || '').trim();
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT.trim(), 10) : 587;
  const user = (process.env.SMTP_USER || '').trim();
  const pass = (process.env.SMTP_PASS || '').trim();
  const from = (process.env.SMTP_FROM || '').trim() || (user ? `"SCMS Portal" <${user}>` : `"SCMS Portal" <${NOTIFICATION_EMAIL}>`);

  // An active SMTP configuration requires user and pass, plus a host (or default to smtp.gmail.com if host omitted)
  const resolvedHost = host || (user ? 'smtp.gmail.com' : '');
  const isConfigured = Boolean(resolvedHost && user && pass);

  return {
    host: resolvedHost,
    port,
    secure: port === 465,
    user,
    pass,
    from,
    isConfigured,
  };
}

// Nodemailer transport using .env SMTP configuration
function createTransporter(config: SmtpConfig) {
  if (!config.isConfigured) {
    return null;
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      rejectUnauthorized: false, // Prevent SSL reject on custom local relays
    },
  });
}

// Helper to format HTML email
function generateEmailHtml(data: any): string {
  const isQuote = data.type === 'quote';
  const title = isQuote
    ? 'New Construction Quote Request'
    : 'New Manpower Supply Request';

  const rows = Object.entries(data)
    .filter(([k]) => !['type', 'id', 'submittedAt'].includes(k))
    .map(([key, val]) => {
      const formattedKey = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
      return `
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b; width: 35%; background: #f8fafc;">${formattedKey}</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #334155;">${val || 'N/A'}</td>
        </tr>
      `;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #cbd5e1; }
        .header { background: #0c0d12; color: #ffffff; padding: 24px; border-bottom: 3px solid #d4af37; text-align: center; }
        .header h1 { margin: 0 0 4px; font-size: 18px; letter-spacing: 1px; color: #fce089; }
        .header p { margin: 0; font-size: 12px; color: #cbd5e1; text-transform: uppercase; }
        .content { padding: 24px; }
        .badge { display: inline-block; padding: 6px 12px; background: #fef3c7; color: #92400e; font-weight: bold; font-size: 12px; border-radius: 9999px; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 14px; }
        .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
        .action-btn { display: inline-block; padding: 10px 20px; background: #0f4c81; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 16px; font-size: 13px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SOHANUR CONSTRUCTION &amp; MANPOWER SOLUTION</h1>
          <p>Official Website Form Submission</p>
        </div>
        <div class="content">
          <div class="badge">${title}</div>
          <p style="font-size: 14px; color: #475569; margin-top: 0;">
            A customer has submitted a new inquiry through your official website. Details are provided below:
          </p>
          <table>
            ${rows}
          </table>
          ${
            data.phone
              ? `<div style="margin-top: 20px; text-align: center;">
                  <a href="tel:${data.phone}" class="action-btn" style="background: #16a34a; margin-right: 8px;">Call Client: ${data.phone}</a>
                  ${data.email ? `<a href="mailto:${data.email}" class="action-btn">Reply via Email</a>` : ''}
                </div>`
              : ''
          }
        </div>
        <div class="footer">
          <p style="margin: 0;">Submission Time: ${data.submittedAt || new Date().toLocaleString()}</p>
          <p style="margin: 4px 0 0;">SCMS Bangladesh • Naogaon Sadar, Naogaon, Bangladesh</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health endpoint
app.get('/api/health', (req, res) => {
  const smtp = getSmtpConfig();
  res.json({
    status: 'ok',
    notificationEmail: NOTIFICATION_EMAIL,
    smtp: {
      configured: smtp.isConfigured,
      host: smtp.host || null,
      port: smtp.port,
      secure: smtp.secure,
      userConfigured: Boolean(smtp.user),
    },
  });
});

// GET all stored inquiries
app.get('/api/inquiries', (req, res) => {
  const inquiries = loadInquiries();
  res.json({ count: inquiries.length, inquiries });
});

// POST new inquiry from form - processes using server-side SMTP configuration from .env
app.post('/api/inquiries', async (req, res) => {
  try {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No form submission payload received.',
      });
    }

    const inquiryId = `inq-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const inquiryRecord = {
      id: inquiryId,
      ...data,
      submittedAt: new Date().toISOString(),
    };

    // 1. Record inquiry locally for persistent auditing and record-keeping
    saveInquiry(inquiryRecord);

    const isQuote = data.type === 'quote';
    const clientName = data.fullName || data.name || 'Valued Client';
    const clientPhone = data.phone || 'N/A';
    const clientEmail = data.email || undefined;
    const emailSubject = `[SCMS Official] ${isQuote ? 'New Construction Quote Request' : 'New Manpower Supply Request'} - ${clientName} (${clientPhone})`;
    const emailHtml = generateEmailHtml(inquiryRecord);

    const smtp = getSmtpConfig();
    let smtpDelivered = false;
    let smtpError: string | null = null;

    // 2. Dispatch email notification utilizing SMTP configuration settings from .env
    if (smtp.isConfigured) {
      try {
        const transporter = createTransporter(smtp);
        if (transporter) {
          const info = await transporter.sendMail({
            from: smtp.from,
            to: NOTIFICATION_EMAIL,
            replyTo: clientEmail,
            subject: emailSubject,
            html: emailHtml,
          });
          smtpDelivered = true;
          console.log(`[SMTP] Successfully dispatched inquiry ${inquiryId} to ${NOTIFICATION_EMAIL} via ${smtp.host}:${smtp.port}. Message ID: ${info.messageId}`);
        }
      } catch (err: any) {
        smtpError = err?.message || 'SMTP transmission failure';
        console.error(`[SMTP] Failed to send email via ${smtp.host}:${smtp.port}:`, err);
      }
    } else {
      console.log(`[SMTP] Configuration incomplete in .env (host: ${smtp.host || 'none'}, user: ${smtp.user ? 'set' : 'none'}, pass: ${smtp.pass ? 'set' : 'none'}). Inquiry ${inquiryId} saved.`);
    }

    return res.status(200).json({
      success: true,
      inquiryId,
      smtpConfigured: smtp.isConfigured,
      smtpDelivered,
      smtpError: smtpError || undefined,
      recipient: NOTIFICATION_EMAIL,
      message: smtpDelivered
        ? `Inquiry successfully submitted and notification sent to ${NOTIFICATION_EMAIL} via SMTP.`
        : smtp.isConfigured
        ? `Inquiry received and saved, but SMTP notification failed: ${smtpError}`
        : `Inquiry received and stored safely. SMTP configuration in .env is pending.`,
    });
  } catch (error: any) {
    console.error('Error handling inquiry submission:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Internal server error while processing form submission',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SCMS Server running on http://0.0.0.0:${PORT}`);
    console.log(`Notification email destination: ${NOTIFICATION_EMAIL}`);
  });
}

startServer();
