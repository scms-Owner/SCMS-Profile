import React from 'react';

interface CompanyLogoSealProps {
  size?: number | string;
  className?: string;
  theme?: 'gold' | 'blue' | 'white';
  showImageFallback?: boolean;
}

export const CompanyLogoSeal: React.FC<CompanyLogoSealProps> = ({
  size = 48,
  className = '',
  theme = 'gold',
  showImageFallback = true,
}) => {
  // Color configuration according to theme
  const colors = {
    gold: {
      primary: '#d4af37',
      secondary: '#fce089',
      accent: '#aa7c11',
      bgGradStart: '#1a1d26',
      bgGradEnd: '#0d0f14',
      border: 'rgba(212, 175, 55, 0.4)',
    },
    blue: {
      primary: '#0f4c81',
      secondary: '#1d70b8',
      accent: '#092f52',
      bgGradStart: '#ffffff',
      bgGradEnd: '#f0f4f9',
      border: 'rgba(15, 76, 129, 0.4)',
    },
    white: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      accent: '#cbd5e1',
      bgGradStart: '#1e293b',
      bgGradEnd: '#0f172a',
      border: 'rgba(255, 255, 255, 0.3)',
    },
  }[theme];

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      title="SOHANUR CONSTRUCTION & MANPOWER SOLUTION (SCMS)"
    >
      {/* High-Precision Official Vector Circular Seal Badge */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          {/* Circular text paths */}
          {/* Top arc for "SOHANUR CONSTRUCTION" */}
          <path
            id="scms-seal-top-arc"
            d="M 65,250 A 185,185 0 1,1 435,250"
            fill="none"
          />
          {/* Bottom arc for "& MANPOWER SOLUTION" */}
          <path
            id="scms-seal-bottom-arc"
            d="M 435,250 A 185,185 0 0,1 65,250"
            fill="none"
          />

          {/* Linear Gradients */}
          <linearGradient id="scmsGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fce089" />
            <stop offset="45%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#9a700e" />
          </linearGradient>

          <linearGradient id="scmsBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#0f4c81" />
            <stop offset="100%" stopColor="#0a2a4a" />
          </linearGradient>

          <radialGradient id="scmsBgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor={colors.bgGradStart} />
            <stop offset="100%" stopColor={colors.bgGradEnd} />
          </radialGradient>
        </defs>

        {/* Outer Background Circle */}
        <circle cx="250" cy="250" r="242" fill="url(#scmsBgGrad)" />

        {/* Outer Heavy Rim */}
        <circle
          cx="250"
          cy="250"
          r="240"
          stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
          strokeWidth="6"
        />

        {/* Outer Secondary Ring */}
        <circle
          cx="250"
          cy="250"
          r="230"
          stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
          strokeWidth="2.5"
        />

        {/* Inner Ring enclosing the center illustration */}
        <circle
          cx="250"
          cy="250"
          r="158"
          stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
          strokeWidth="3.5"
        />
        <circle
          cx="250"
          cy="250"
          r="151"
          stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Circular Curved Text: TOP */}
        <text
          fill={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
          fontSize="25"
          fontWeight="900"
          fontFamily="Montserrat, Arial, sans-serif"
          letterSpacing="4"
        >
          <textPath
            href="#scms-seal-top-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            SOHANUR CONSTRUCTION
          </textPath>
        </text>

        {/* Circular Curved Text: BOTTOM */}
        <text
          fill={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
          fontSize="24"
          fontWeight="900"
          fontFamily="Montserrat, Arial, sans-serif"
          letterSpacing="4.5"
        >
          <textPath
            href="#scms-seal-bottom-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            &amp; MANPOWER SOLUTION
          </textPath>
        </text>

        {/* Left Flanking Star */}
        <g transform="translate(62, 250)">
          <polygon
            points="0,-9 2.5,-2.5 9,-2.5 4,1.5 6,8 0,4 -6,8 -4,1.5 -9,-2.5 -2.5,-2.5"
            fill={colors.secondary}
          />
        </g>

        {/* Right Flanking Star */}
        <g transform="translate(438, 250)">
          <polygon
            points="0,-9 2.5,-2.5 9,-2.5 4,1.5 6,8 0,4 -6,8 -4,1.5 -9,-2.5 -2.5,-2.5"
            fill={colors.secondary}
          />
        </g>

        {/* ================= CENTER GRAPHIC ================= */}
        {/* Sky/Backdrop subtle rays/tint inside center circle */}
        <clipPath id="scmsInnerClip">
          <circle cx="250" cy="250" r="148" />
        </clipPath>

        <g clipPath="url(#scmsInnerClip)">
          {/* Subtle sun or structural ambient ring */}
          <circle cx="250" cy="185" r="40" fill={theme === 'gold' ? 'rgba(212,175,55,0.06)' : 'rgba(15,76,129,0.08)'} />

          {/* Buildings & Skyline (Left to Mid) */}
          {/* Left House with Gable Roof */}
          <path
            d="M 125,242 L 155,210 L 185,242 Z"
            fill="none"
            stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* House Window */}
          <rect
            x="147"
            y="222"
            width="16"
            height="14"
            rx="1"
            stroke={colors.secondary}
            strokeWidth="1.5"
            fill="none"
          />
          <line x1="155" y1="222" x2="155" y2="236" stroke={colors.secondary} strokeWidth="1" />
          <line x1="147" y1="229" x2="163" y2="229" stroke={colors.secondary} strokeWidth="1" />

          {/* Central Tall Skyscraper */}
          <path
            d="M 180,242 L 180,140 L 225,140 L 225,242"
            fill="none"
            stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Skyscraper Windows Grid */}
          <line x1="195" y1="145" x2="195" y2="240" stroke={colors.secondary} strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="210" y1="145" x2="210" y2="240" stroke={colors.secondary} strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="180" y1="160" x2="225" y2="160" stroke={colors.secondary} strokeWidth="1" />
          <line x1="180" y1="180" x2="225" y2="180" stroke={colors.secondary} strokeWidth="1" />
          <line x1="180" y1="200" x2="225" y2="200" stroke={colors.secondary} strokeWidth="1" />
          <line x1="180" y1="220" x2="225" y2="220" stroke={colors.secondary} strokeWidth="1" />

          {/* Secondary Commercial Tower (Behind/Right) */}
          <path
            d="M 225,242 L 225,155 L 260,155 L 260,242"
            fill="none"
            stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
            strokeWidth="3"
          />
          <line x1="242" y1="158" x2="242" y2="240" stroke={colors.secondary} strokeWidth="1.5" strokeDasharray="4 3" />

          {/* Tower Crane (Right Side) */}
          {/* Vertical Mast */}
          <line x1="290" y1="110" x2="290" y2="245" stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary} strokeWidth="3" />
          <line x1="302" y1="110" x2="302" y2="245" stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary} strokeWidth="3" />
          {/* Mast Cross Bracing */}
          <line x1="290" y1="125" x2="302" y2="140" stroke={colors.secondary} strokeWidth="1.5" />
          <line x1="302" y1="125" x2="290" y2="140" stroke={colors.secondary} strokeWidth="1.5" />
          <line x1="290" y1="150" x2="302" y2="165" stroke={colors.secondary} strokeWidth="1.5" />
          <line x1="302" y1="150" x2="290" y2="165" stroke={colors.secondary} strokeWidth="1.5" />
          <line x1="290" y1="175" x2="302" y2="190" stroke={colors.secondary} strokeWidth="1.5" />
          <line x1="302" y1="175" x2="290" y2="190" stroke={colors.secondary} strokeWidth="1.5" />
          <line x1="290" y1="200" x2="302" y2="215" stroke={colors.secondary} strokeWidth="1.5" />
          <line x1="302" y1="200" x2="290" y2="215" stroke={colors.secondary} strokeWidth="1.5" />

          {/* Crane Tower Top / Apex */}
          <polygon
            points="296,88 290,110 302,110"
            stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
            strokeWidth="2.5"
            fill="none"
          />

          {/* Horizontal Jib & Counter-Jib */}
          {/* Main Jib to the right */}
          <line x1="296" y1="106" x2="375" y2="106" stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary} strokeWidth="3" />
          <line x1="296" y1="113" x2="375" y2="113" stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary} strokeWidth="2" />
          {/* Jib Trusses */}
          <line x1="302" y1="113" x2="315" y2="106" stroke={colors.secondary} strokeWidth="1.2" />
          <line x1="315" y1="113" x2="328" y2="106" stroke={colors.secondary} strokeWidth="1.2" />
          <line x1="328" y1="113" x2="341" y2="106" stroke={colors.secondary} strokeWidth="1.2" />
          <line x1="341" y1="113" x2="354" y2="106" stroke={colors.secondary} strokeWidth="1.2" />
          <line x1="354" y1="113" x2="367" y2="106" stroke={colors.secondary} strokeWidth="1.2" />

          {/* Counter Jib to the left */}
          <line x1="290" y1="108" x2="250" y2="108" stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary} strokeWidth="2.5" />
          {/* Counterweight Block */}
          <rect x="245" y="104" width="14" height="12" fill={colors.secondary} rx="1" />

          {/* Pendant Cables */}
          <line x1="296" y1="88" x2="350" y2="106" stroke={colors.secondary} strokeWidth="1.5" />
          <line x1="296" y1="88" x2="252" y2="108" stroke={colors.secondary} strokeWidth="1.5" />

          {/* Trolley, Hoist Cable & Hook */}
          <rect x="338" y="112" width="10" height="5" fill={colors.secondary} />
          <line x1="343" y1="117" x2="343" y2="155" stroke={colors.secondary} strokeWidth="1.5" />
          {/* Crane Hook */}
          <path
            d="M 343,155 C 343,162 336,162 336,158 C 336,155 339,153 341,155"
            fill="none"
            stroke={colors.secondary}
            strokeWidth="2"
          />

          {/* Wave / Foundation Lines at Base */}
          <path
            d="M 120,248 Q 185,236 250,248 T 380,248"
            fill="none"
            stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
            strokeWidth="3.5"
          />
          <path
            d="M 130,256 Q 190,244 250,256 T 370,256"
            fill="none"
            stroke={colors.secondary}
            strokeWidth="2"
          />
          <path
            d="M 145,263 Q 198,252 250,263 T 355,263"
            fill="none"
            stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          {/* SCMS Center typography with flanking bars */}
          <g transform="translate(250, 290)">
            {/* Left bar */}
            <line x1="-105" y1="-7" x2="-62" y2="-7" stroke={colors.secondary} strokeWidth="2.5" />
            {/* Right bar */}
            <line x1="62" y1="-7" x2="105" y2="-7" stroke={colors.secondary} strokeWidth="2.5" />
            {/* SCMS Text */}
            <text
              textAnchor="middle"
              y="0"
              fill={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
              fontSize="24"
              fontWeight="900"
              fontFamily="Montserrat, Arial, sans-serif"
              letterSpacing="6"
            >
              SCMS
            </text>
          </g>

          {/* Address Box */}
          <g transform="translate(250, 326)">
            {/* Outer Box Frame */}
            <rect
              x="-95"
              y="-22"
              width="190"
              height="38"
              rx="3"
              fill={theme === 'gold' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.8)'}
              stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
              strokeWidth="2"
            />
            {/* Address Text Line 1 */}
            <text
              textAnchor="middle"
              y="-7"
              fill={theme === 'gold' ? '#ffffff' : colors.primary}
              fontSize="12"
              fontWeight="800"
              fontFamily="Montserrat, Arial, sans-serif"
              letterSpacing="2.5"
            >
              NAOGAON SADAR
            </text>
            {/* Address Text Line 2 */}
            <text
              textAnchor="middle"
              y="9"
              fill={colors.secondary}
              fontSize="9.5"
              fontWeight="700"
              fontFamily="Montserrat, Arial, sans-serif"
              letterSpacing="1.8"
            >
              NAOGAON, BANGLADESH
            </text>
          </g>

          {/* Three Stars at Bottom */}
          <g transform="translate(250, 362)">
            {/* Left Star */}
            <g transform="translate(-32, 0)">
              <polygon
                points="0,-7 2,-2 7,-2 3,1 4.5,6 0,3 -4.5,6 -3,1 -7,-2 -2,-2"
                fill={colors.secondary}
              />
            </g>
            {/* Center Star (slightly larger) */}
            <g transform="translate(0, -1)">
              <polygon
                points="0,-9 2.5,-2.5 9,-2.5 4,1.5 6,8 0,4 -6,8 -4,1.5 -9,-2.5 -2.5,-2.5"
                fill={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
              />
            </g>
            {/* Right Star */}
            <g transform="translate(32, 0)">
              <polygon
                points="0,-7 2,-2 7,-2 3,1 4.5,6 0,3 -4.5,6 -3,1 -7,-2 -2,-2"
                fill={colors.secondary}
              />
            </g>
            {/* Decorative underline arc */}
            <path
              d="M -45,11 Q 0,18 45,11"
              fill="none"
              stroke={theme === 'gold' ? 'url(#scmsGoldGrad)' : colors.primary}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
