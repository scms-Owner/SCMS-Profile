import { supabase } from './supabase';
import { applyRemoteCompanyData } from '../data/companyData';
import { applyRemoteProfileData } from '../data/corporateProfileData';
import { ServiceItem, WorkerCategory, ProjectItem, GalleryItem } from '../types';

const rows = async (table: string) => {
  const { data, error } = await supabase.from(table).select('*').order('sort_order', { ascending: true });
  if (error) throw error;
  return data || [];
};

export async function loadRemoteSiteData() {
  try {
    const [
      settingsRes,
      servicesRes,
      workersRes,
      projectsRes,
      projectGalleryRes,
      galleryRes,
      howRes,
      whyRes,
      contractingRes,
      profilePagesRes,
      profileStatsRes,
      profileServicesRes,
      profileValuesRes,
      profileWhyRes,
      profileProjectsRes,
    ] = await Promise.all([
      supabase.from('site_settings').select('*').eq('site_key', 'main').maybeSingle(),
      supabase.from('services').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('worker_categories').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('projects').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('project_gallery').select('*').order('sort_order'),
      supabase.from('gallery_items').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('how_it_works').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('why_choose_us').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('contracting_services').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('profile_pages').select('*').order('page_number'),
      supabase.from('profile_stats').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('profile_services').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('profile_values').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('profile_why_us').select('*').eq('is_visible', true).order('sort_order'),
      supabase.from('profile_projects').select('*').eq('is_visible', true).order('sort_order'),
    ]);

    const results = [
      settingsRes, servicesRes, workersRes, projectsRes, projectGalleryRes,
      galleryRes, howRes, whyRes, contractingRes, profilePagesRes,
      profileStatsRes, profileServicesRes, profileValuesRes, profileWhyRes,
      profileProjectsRes,
    ];
    const firstError = results.find((r) => r.error);
    if (firstError?.error) throw firstError.error;

    const settings = settingsRes.data;
    const services = (servicesRes.data || []).map((r: any): ServiceItem => ({
      id: r.id, number: r.number || '', title: r.title, shortDesc: r.short_desc || '',
      fullDesc: r.full_desc || '', iconName: r.icon_name || 'Building2',
      image: r.image_url || '', highlights: Array.isArray(r.highlights) ? r.highlights : [],
      category: r.category,
    }));
    const workers = (workersRes.data || []).map((r: any): WorkerCategory => ({
      id: r.id, name: r.name, bengaliTitle: r.bengali_title || undefined,
      category: r.category || '', shortDesc: r.short_desc || '', skills: Array.isArray(r.skills) ? r.skills : [],
      iconName: r.icon_name || 'HardHat', image: r.image_url || '',
    }));
    const projectGallery = projectGalleryRes.data || [];
    const projects = (projectsRes.data || []).map((r: any): ProjectItem => ({
      id: r.id, name: r.name, location: r.location || '', projectType: r.project_type,
      category: r.category, status: r.status, shortDesc: r.short_desc || '',
      fullDesc: r.full_desc || '', servicesProvided: Array.isArray(r.services_provided) ? r.services_provided : [],
      image: r.image_url || '',
      gallery: projectGallery.filter((g: any) => g.project_id === r.id).map((g: any) => g.image_url),
    }));
    const gallery = (galleryRes.data || []).map((r: any): GalleryItem => ({
      id: r.id, title: r.title, category: r.category, image: r.image_url, location: r.location || undefined,
    }));

    applyRemoteCompanyData({
      companyInfo: settings ? {
        name: settings.company_name || undefined,
        shortName: settings.short_name || undefined,
        tagline: settings.tagline || undefined,
        business: settings.business || undefined,
        proprietor: settings.proprietor_name || undefined,
        proprietorTitle: settings.proprietor_title || undefined,
        estd: settings.estd || undefined,
        website: settings.website || undefined,
        proprietorPhoto: settings.proprietor_photo_url || undefined,
        phones: settings.phones || undefined,
        email: settings.email || undefined,
        location: settings.address || undefined,
        whatsAppUrl: settings.whatsapp_url || undefined,
        workingHours: settings.working_hours || undefined,
        defaultWhatsAppMessage: settings.default_whatsapp_message || undefined,
      } : undefined,
      services,
      workers,
      projects,
      gallery,
      contracting: (contractingRes.data || []).map((r: any) => r.title),
      howItWorks: (howRes.data || []).map((r: any) => ({
        step: String(r.step_number).padStart(2, '0'), title: r.title, desc: r.description || '',
      })),
      whyChoose: (whyRes.data || []).map((r: any) => ({ title: r.title, desc: r.description || '' })),
    });

    const profileServices = profileServicesRes.data || [];
    applyRemoteProfileData({
      pages: (profilePagesRes.data || []).map((r: any) => ({
        pageNumber: r.page_number, title: r.title, label: r.label || '',
      })),
      stats: (profileStatsRes.data || []).map((r: any) => ({
        value: r.value, label: r.label, subtext: r.subtext || '',
      })),
      servicesConstruction: profileServices.filter((r: any) => r.service_group === 'construction').map((r: any) => ({
        name: r.name, desc: r.description || '',
      })),
      servicesManpower: profileServices.filter((r: any) => r.service_group === 'manpower').map((r: any) => ({
        name: r.name, desc: r.description || '',
      })),
      values: (profileValuesRes.data || []).map((r: any) => ({
        id: r.id, title: r.title, desc: r.description || '', icon: r.icon_name || 'Shield',
      })),
      whyUs: (profileWhyRes.data || []).map((r: any) => ({
        title: r.title, desc: r.description || '',
      })),
      projects: (profileProjectsRes.data || []).map((r: any) => ({
        num: r.project_number || '', name: r.name, location: r.location || '',
        year: r.year || '', desc: r.description || '', image: r.image_url || '',
      })),
    });

    return true;
  } catch (error) {
    console.warn('Remote site data unavailable; keeping bundled content.', error);
    return false;
  }
}

export async function isAdminUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return !!user && user.email?.toLowerCase() === 'scms.owner@gmail.com';
}

export { rows };
