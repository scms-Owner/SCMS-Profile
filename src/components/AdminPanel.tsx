import React, { useEffect, useMemo, useState } from 'react';
import { supabase, ADMIN_EMAIL, SITE_MEDIA_BUCKET } from '../lib/supabase';
import { loadRemoteSiteData } from '../lib/siteData';
import { COMPANY_INFO, CORE_SERVICES, WORKER_CATEGORIES, CONTRACTING_SERVICES_LIST, HOW_IT_WORKS_STEPS, WHY_CHOOSE_ITEMS, PORTFOLIO_PROJECTS, GALLERY_ITEMS } from '../data/companyData';
import { PROFILE_PAGES_META, PROFILE_STATS, PROFILE_SERVICES_CONSTRUCTION, PROFILE_SERVICES_MANPOWER, PROFILE_VALUES_8, PROFILE_WHY_US_8, PROFILE_PROJECTS_6 } from '../data/corporateProfileData';

type Tab = 'overview' | 'company' | 'services' | 'workers' | 'projects' | 'gallery';

const blankService = { id: '', number: '', title: '', short_desc: '', full_desc: '', icon_name: 'Building2', image_url: '', highlights: [], category: 'construction', sort_order: 0, is_visible: true };
const blankWorker = { id: '', name: '', bengali_title: '', category: '', short_desc: '', skills: [], icon_name: 'HardHat', image_url: '', sort_order: 0, is_visible: true };
const blankProject = { id: '', name: '', location: '', project_type: 'Residential', category: 'CONSTRUCTION', status: 'COMPLETED', short_desc: '', full_desc: '', services_provided: [], image_url: '', sort_order: 0, is_visible: true };
const blankGallery = { id: '', title: '', category: 'Construction Work', image_url: '', location: '', sort_order: 0, is_visible: true };

const inputClass = 'w-full rounded-xl border border-white/10 bg-[#11141b] px-3 py-2.5 text-sm text-white outline-none focus:border-[#d4af37]/70';
const cardClass = 'rounded-2xl border border-white/10 bg-[#10131a] p-5 shadow-xl';

function Field({ label, value, onChange, textarea=false, type='text' }: any) {
  return <label className="block space-y-1.5">
    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</span>
    {textarea
      ? <textarea className={inputClass + ' min-h-28'} value={value ?? ''} onChange={e=>onChange(e.target.value)} />
      : <input className={inputClass} type={type} value={value ?? ''} onChange={e=>onChange(e.target.value)} />}
  </label>;
}

function ArrayField({ label, value, onChange }: any) {
  return <Field label={label + ' (one per line)'} textarea value={(value || []).join('\n')} onChange={(v:string)=>onChange(v.split('\n').map(x=>x.trim()).filter(Boolean))} />;
}

async function uploadImage(file: File) {
  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const path = 'uploads/' + crypto.randomUUID() + '.' + ext;
  const { error } = await supabase.storage.from(SITE_MEDIA_BUCKET).upload(path, file, { upsert: false, contentType: file.type });
  if (error) throw error;
  const { data } = supabase.storage.from(SITE_MEDIA_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

function ImagePicker({ value, onChange }: { value: string; onChange: (v:string)=>void }) {
  const [busy,setBusy]=useState(false);
  return <div className="space-y-2">
    <Field label="Image URL" value={value} onChange={onChange} />
    <label className="inline-flex cursor-pointer items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-white/10">
      {busy ? 'Uploading…' : 'Upload image'}
      <input className="hidden" type="file" accept="image/*" disabled={busy} onChange={async e=>{
        const f=e.target.files?.[0]; if(!f) return;
        try { setBusy(true); onChange(await uploadImage(f)); } catch(err:any) { alert(err.message || 'Upload failed'); } finally { setBusy(false); }
      }} />
    </label>
    {value && <img src={value} alt="" className="mt-2 h-24 w-full rounded-xl object-cover border border-white/10" />}
  </div>;
}

export function AdminPanel() {
  const [tab,setTab]=useState<Tab>('overview');
  const [sessionEmail,setSessionEmail]=useState('');
  const [loading,setLoading]=useState(true);
  const [loginEmail,setLoginEmail]=useState(ADMIN_EMAIL);
  const [loginSent,setLoginSent]=useState(false);
  const [error,setError]=useState('');
  const [notice,setNotice]=useState('');

  const [settings,setSettings]=useState<any>({});
  const [services,setServices]=useState<any[]>([]);
  const [workers,setWorkers]=useState<any[]>([]);
  const [projects,setProjects]=useState<any[]>([]);
  const [gallery,setGallery]=useState<any[]>([]);
  const [editing,setEditing]=useState<any>(null);

  const seedDefaults = async () => {
    const settings = {
      site_key:'main', company_name:COMPANY_INFO.name, short_name:COMPANY_INFO.shortName, tagline:COMPANY_INFO.tagline,
      business:COMPANY_INFO.business, proprietor_name:COMPANY_INFO.proprietor, proprietor_title:COMPANY_INFO.proprietorTitle,
      estd:COMPANY_INFO.estd, website:COMPANY_INFO.website, email:COMPANY_INFO.email, phones:COMPANY_INFO.phones,
      address:COMPANY_INFO.location, whatsapp_url:COMPANY_INFO.whatsAppUrl, working_hours:COMPANY_INFO.workingHours,
      default_whatsapp_message:COMPANY_INFO.defaultWhatsAppMessage, proprietor_photo_url:COMPANY_INFO.proprietorPhoto,
    };
    const results:any[] = [];
    results.push(await supabase.from('site_settings').upsert(settings,{onConflict:'site_key'}));
    results.push(await supabase.from('services').upsert(CORE_SERVICES.map((x:any,i)=>({id:x.id,number:x.number,title:x.title,short_desc:x.shortDesc,full_desc:x.fullDesc,icon_name:x.iconName,image_url:x.image,highlights:x.highlights,category:x.category,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('worker_categories').upsert(WORKER_CATEGORIES.map((x:any,i)=>({id:x.id,name:x.name,bengali_title:x.bengaliTitle,category:x.category,short_desc:x.shortDesc,skills:x.skills,icon_name:x.iconName,image_url:x.image,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('projects').upsert(PORTFOLIO_PROJECTS.map((x:any,i)=>({id:x.id,name:x.name,location:x.location,project_type:x.projectType,category:x.category,status:x.status,short_desc:x.shortDesc,full_desc:x.fullDesc,services_provided:x.servicesProvided,image_url:x.image,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('project_gallery').insert(PORTFOLIO_PROJECTS.flatMap((x:any)=>x.gallery.map((url:string,i:number)=>({project_id:x.id,image_url:url,sort_order:i})))));
    results.push(await supabase.from('gallery_items').upsert(GALLERY_ITEMS.map((x:any,i)=>({id:x.id,title:x.title,category:x.category,image_url:x.image,location:x.location,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('how_it_works').upsert(HOW_IT_WORKS_STEPS.map((x:any,i)=>({id:'step-'+(i+1),step_number:i+1,title:x.title,description:x.desc,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('why_choose_us').upsert(WHY_CHOOSE_ITEMS.map((x:any,i)=>({id:'why-'+(i+1),title:x.title,description:x.desc,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('contracting_services').upsert(CONTRACTING_SERVICES_LIST.map((x:string,i:number)=>({id:'contract-'+(i+1),title:x,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('profile_pages').upsert(PROFILE_PAGES_META.map((x:any)=>({page_number:x.pageNumber,title:x.title,label:x.label}))));
    results.push(await supabase.from('profile_stats').upsert(PROFILE_STATS.map((x:any,i:number)=>({id:'stat-'+(i+1),value:x.value,label:x.label,subtext:x.subtext,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('profile_services').insert([
      ...PROFILE_SERVICES_CONSTRUCTION.map((x:any,i:number)=>({service_group:'construction',name:x.name,description:x.desc,sort_order:i,is_visible:true})),
      ...PROFILE_SERVICES_MANPOWER.map((x:any,i:number)=>({service_group:'manpower',name:x.name,description:x.desc,sort_order:i,is_visible:true}))
    ]));
    results.push(await supabase.from('profile_values').upsert(PROFILE_VALUES_8.map((x:any,i:number)=>({id:x.id,title:x.title,description:x.desc,icon_name:x.icon,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('profile_why_us').upsert(PROFILE_WHY_US_8.map((x:any,i:number)=>({id:'pwhy-'+(i+1),title:x.title,description:x.desc,sort_order:i,is_visible:true}))));
    results.push(await supabase.from('profile_projects').upsert(PROFILE_PROJECTS_6.map((x:any,i:number)=>({id:'profile-project-'+(i+1),project_number:x.num,name:x.name,location:x.location,year:x.year,description:x.desc,image_url:x.image,sort_order:i,is_visible:true}))));
    const bad=results.find(x=>x.error); if(bad?.error) throw bad.error;
    setNotice('Initial website content imported into Supabase.');
  };

  const refresh = async () => {
    setError('');
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || user.email?.toLowerCase() !== ADMIN_EMAIL) {
      setSessionEmail('');
      setLoading(false);
      return;
    }
    setSessionEmail(user.email);
    const [s,sv,w,p,g] = await Promise.all([
      supabase.from('site_settings').select('*').eq('site_key','main').maybeSingle(),
      supabase.from('services').select('*').order('sort_order'),
      supabase.from('worker_categories').select('*').order('sort_order'),
      supabase.from('projects').select('*').order('sort_order'),
      supabase.from('gallery_items').select('*').order('sort_order'),
    ]);
    if (s.error) throw s.error; if (sv.error) throw sv.error; if (w.error) throw w.error; if (p.error) throw p.error; if (g.error) throw g.error;
    const emptyDb = !s.data && !(sv.data?.length) && !(w.data?.length) && !(p.data?.length) && !(g.data?.length);
    if (emptyDb) { await seedDefaults(); return refresh(); }
    setSettings(s.data || { site_key:'main', company_name:'', short_name:'', tagline:'', business:'', proprietor_name:'', proprietor_title:'', proprietor_bio:'', estd:'2016', website:'', email:ADMIN_EMAIL, phones:[], address:'', whatsapp_url:'', working_hours:'', default_whatsapp_message:'', logo_url:'', hero_image_url:'', proprietor_photo_url:'', mission:'', vision:'', about_description:'' });
    setServices(sv.data || []); setWorkers(w.data || []); setProjects(p.data || []); setGallery(g.data || []);
    setLoading(false);
  };

  useEffect(()=>{ refresh().catch(e=>{setError(e.message);setLoading(false)}); const {data}=supabase.auth.onAuthStateChange(()=>refresh().catch(()=>{})); return ()=>data.subscription.unsubscribe(); },[]);

  const save = async (table:string, row:any, id?:any) => {
    setError(''); setNotice('');
    const payload={...row}; delete payload.created_at; delete payload.updated_at;
    const result = id ? await supabase.from(table).update(payload).eq('id',id) : await supabase.from(table).insert(payload);
    if(result.error) { setError(result.error.message); return; }
    setNotice('Saved successfully.'); setEditing(null); await refresh();
  };

  const remove = async (table:string,id:string) => {
    if(!confirm('Delete this item?')) return;
    const {error}=await supabase.from(table).delete().eq('id',id);
    if(error) setError(error.message); else { setNotice('Deleted.'); await refresh(); }
  };

  const sendMagicLink = async () => {
    setError(''); setLoginSent(false);
    if(loginEmail.toLowerCase() !== ADMIN_EMAIL) { setError('Only the authorized admin email can sign in.'); return; }
    const {error}=await supabase.auth.signInWithOtp({email:ADMIN_EMAIL, options:{emailRedirectTo:window.location.origin + window.location.pathname + '#/admin'}});
    if(error) setError(error.message); else setLoginSent(true);
  };

  if(loading) return <div className="min-h-screen bg-[#08090d] flex items-center justify-center text-gray-300">Loading admin…</div>;

  if(!sessionEmail) return <div className="min-h-screen bg-[#08090d] px-4 py-12 text-white">
    <div className="mx-auto max-w-md rounded-3xl border border-[#d4af37]/25 bg-[#10131a] p-7 shadow-2xl">
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">SCMS ADMIN</div>
        <h1 className="mt-2 text-2xl font-bold">Secure website management</h1>
        <p className="mt-2 text-sm text-gray-400">A magic link will be sent to the authorized administrator email.</p>
      </div>
      <Field label="Admin email" value={loginEmail} onChange={setLoginEmail} />
      <button onClick={sendMagicLink} className="mt-4 w-full rounded-xl bg-[#d4af37] px-4 py-3 font-bold text-black hover:bg-[#e6c45a]">Send secure login link</button>
      {loginSent && <p className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">Check {ADMIN_EMAIL} and open the login link.</p>}
      {error && <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
      <a href={window.location.pathname} className="mt-6 block text-center text-xs text-gray-500 hover:text-white">← Back to website</a>
    </div>
  </div>;

  const nav: [Tab,string][]=[['overview','Dashboard'],['company','Company'],['services','Services'],['workers','Manpower'],['projects','Projects'],['gallery','Gallery']];

  return <div className="min-h-screen bg-[#08090d] text-gray-100">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d12]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <div><div className="text-xs font-bold uppercase tracking-[0.22em] text-[#d4af37]">SCMS ADMIN PANEL</div><div className="text-sm text-gray-400">{sessionEmail}</div></div>
        <div className="flex gap-2">
          <a href={window.location.pathname} className="rounded-lg border border-white/10 px-3 py-2 text-xs hover:bg-white/5">Website</a>
          <button onClick={()=>supabase.auth.signOut()} className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-300 hover:bg-red-500/10">Sign out</button>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 pb-3">{nav.map(([id,label])=><button key={id} onClick={()=>{setTab(id);setEditing(null)}} className={'whitespace-nowrap rounded-lg px-3 py-2 text-sm '+(tab===id?'bg-[#d4af37] font-bold text-black':'text-gray-300 hover:bg-white/5')}>{label}</button>)}</div>
    </header>

    <main className="mx-auto max-w-7xl px-4 py-7">
      {notice && <div className="mb-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">{notice}</div>}
      {error && <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}

      {tab==='overview' && <div className="grid gap-5 md:grid-cols-4">
        {[['Services',services.length],['Manpower',workers.length],['Projects',projects.length],['Gallery',gallery.length]].map(([a,b])=><div className={cardClass} key={String(a)}><div className="text-sm text-gray-400">{a}</div><div className="mt-2 text-3xl font-bold text-[#d4af37]">{b}</div></div>)}
        <div className={cardClass+' md:col-span-4'}><h2 className="text-xl font-bold">Website content is now database-driven</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">Changes saved here are stored in Supabase. The public website keeps the existing design and automatically loads visible content from the database.</p></div>
      </div>}

      {tab==='company' && <div className={cardClass+' space-y-4'}>
        <h2 className="text-xl font-bold">Company information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['company_name','Company name'],['short_name','Short name'],['tagline','Tagline'],['business','Business'],
            ['proprietor_name','Proprietor name'],['proprietor_title','Proprietor title'],['estd','Established'],['website','Website'],
            ['email','Email'],['address','Address'],['whatsapp_url','WhatsApp URL'],['working_hours','Working hours'],
          ].map(([k,l])=><Field key={k} label={l} value={settings[k]} onChange={(v:string)=>setSettings({...settings,[k]:v})}/>)}
        </div>
        <Field label="Proprietor bio" textarea value={settings.proprietor_bio} onChange={(v:string)=>setSettings({...settings,proprietor_bio:v})}/>
        <Field label="About description" textarea value={settings.about_description} onChange={(v:string)=>setSettings({...settings,about_description:v})}/>
        <Field label="Mission" textarea value={settings.mission} onChange={(v:string)=>setSettings({...settings,mission:v})}/>
        <Field label="Vision" textarea value={settings.vision} onChange={(v:string)=>setSettings({...settings,vision:v})}/>
        <Field label="Default WhatsApp message" textarea value={settings.default_whatsapp_message} onChange={(v:string)=>setSettings({...settings,default_whatsapp_message:v})}/>
        <div className="grid gap-4 md:grid-cols-3">
          <ImagePicker value={settings.logo_url} onChange={v=>setSettings({...settings,logo_url:v})}/>
          <ImagePicker value={settings.hero_image_url} onChange={v=>setSettings({...settings,hero_image_url:v})}/>
          <ImagePicker value={settings.proprietor_photo_url} onChange={v=>setSettings({...settings,proprietor_photo_url:v})}/>
        </div>
        <ArrayField label="Phone numbers" value={(settings.phones||[]).map((p:any)=>typeof p==='string'?p:p.display||'')} onChange={(v:string[])=>setSettings({...settings,phones:v.map(x=>({display:x,raw:x.replace(/\D/g,'')}))})}/>
        <button onClick={async()=>{const {error}=await supabase.from('site_settings').upsert({...settings,site_key:'main'},{onConflict:'site_key'});if(error)setError(error.message);else{setNotice('Company information saved.');await loadRemoteSiteData();}}} className="rounded-xl bg-[#d4af37] px-5 py-3 font-bold text-black">Save company information</button>
      </div>}

      {tab==='services' && <CrudList title="Services" rows={services} setEditing={setEditing} editing={editing} blank={blankService} table="services" remove={remove} save={save} fields={(r:any,set:(x:any)=>void)=><div className="grid gap-4 md:grid-cols-2">
        <Field label="Title" value={r.title} onChange={(v:string)=>set({...r,title:v})}/><Field label="Number" value={r.number} onChange={(v:string)=>set({...r,number:v})}/>
        <Field label="Category" value={r.category} onChange={(v:string)=>set({...r,category:v})}/><Field label="Icon name" value={r.icon_name} onChange={(v:string)=>set({...r,icon_name:v})}/>
        <Field label="Short description" textarea value={r.short_desc} onChange={(v:string)=>set({...r,short_desc:v})}/><Field label="Full description" textarea value={r.full_desc} onChange={(v:string)=>set({...r,full_desc:v})}/>
        <ArrayField label="Highlights" value={r.highlights} onChange={(v:string[])=>set({...r,highlights:v})}/><ImagePicker value={r.image_url} onChange={v=>set({...r,image_url:v})}/>
      </div>}/>}

      {tab==='workers' && <CrudList title="Manpower categories" rows={workers} setEditing={setEditing} editing={editing} blank={blankWorker} table="worker_categories" remove={remove} save={save} fields={(r:any,set:(x:any)=>void)=><div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" value={r.name} onChange={(v:string)=>set({...r,name:v})}/><Field label="Bengali title" value={r.bengali_title} onChange={(v:string)=>set({...r,bengali_title:v})}/>
        <Field label="Category" value={r.category} onChange={(v:string)=>set({...r,category:v})}/><Field label="Icon name" value={r.icon_name} onChange={(v:string)=>set({...r,icon_name:v})}/>
        <Field label="Description" textarea value={r.short_desc} onChange={(v:string)=>set({...r,short_desc:v})}/><ArrayField label="Skills" value={r.skills} onChange={(v:string[])=>set({...r,skills:v})}/>
        <ImagePicker value={r.image_url} onChange={v=>set({...r,image_url:v})}/>
      </div>}/>}

      {tab==='projects' && <CrudList title="Projects" rows={projects} setEditing={setEditing} editing={editing} blank={blankProject} table="projects" remove={remove} save={save} fields={(r:any,set:(x:any)=>void)=><div className="grid gap-4 md:grid-cols-2">
        <Field label="Project name" value={r.name} onChange={(v:string)=>set({...r,name:v})}/><Field label="Location" value={r.location} onChange={(v:string)=>set({...r,location:v})}/>
        <label className="space-y-1.5"><span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Type</span><select className={inputClass} value={r.project_type} onChange={e=>set({...r,project_type:e.target.value})}>{['Commercial','Residential','Industrial','Infrastructure','Civil RCC','Institutional'].map(x=><option key={x}>{x}</option>)}</select></label>
        <label className="space-y-1.5"><span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Status</span><select className={inputClass} value={r.status} onChange={e=>set({...r,status:e.target.value})}><option>COMPLETED</option><option>ONGOING</option></select></label>
        <Field label="Category" value={r.category} onChange={(v:string)=>set({...r,category:v})}/><Field label="Short description" textarea value={r.short_desc} onChange={(v:string)=>set({...r,short_desc:v})}/>
        <Field label="Full description" textarea value={r.full_desc} onChange={(v:string)=>set({...r,full_desc:v})}/><ArrayField label="Services provided" value={r.services_provided} onChange={(v:string[])=>set({...r,services_provided:v})}/>
        <ImagePicker value={r.image_url} onChange={v=>set({...r,image_url:v})}/>
      </div>}/>}

      {tab==='gallery' && <CrudList title="Gallery" rows={gallery} setEditing={setEditing} editing={editing} blank={blankGallery} table="gallery_items" remove={remove} save={save} fields={(r:any,set:(x:any)=>void)=><div className="grid gap-4 md:grid-cols-2">
        <Field label="Title" value={r.title} onChange={(v:string)=>set({...r,title:v})}/><Field label="Category" value={r.category} onChange={(v:string)=>set({...r,category:v})}/>
        <Field label="Location" value={r.location} onChange={(v:string)=>set({...r,location:v})}/><ImagePicker value={r.image_url} onChange={v=>set({...r,image_url:v})}/>
      </div>}/>}
    </main>
  </div>;
}

function CrudList({title,rows,setEditing,editing,blank,table,remove,save,fields}:any) {
  const [draft,setDraft]=useState<any>(null);
  const current=editing ? draft : null;
  useEffect(()=>{setDraft(editing || null)},[editing]);
  return <div className="space-y-5">
    <div className="flex items-center justify-between gap-3"><h2 className="text-xl font-bold">{title}</h2><button onClick={()=>{const n={...blank,id:crypto.randomUUID().slice(0,8),sort_order:rows.length};setDraft(n);setEditing(n)}} className="rounded-xl bg-[#d4af37] px-4 py-2 text-sm font-bold text-black">+ Add</button></div>
    <div className="grid gap-3 md:grid-cols-2">
      {rows.map((r:any)=><div key={r.id} className={cardClass+' flex items-center gap-3'}>
        {r.image_url && <img src={r.image_url} alt="" className="h-16 w-16 rounded-xl object-cover border border-white/10"/>}
        <div className="min-w-0 flex-1"><div className="font-semibold truncate">{r.title || r.name}</div><div className="text-xs text-gray-500 truncate">{r.category || r.location || ''}</div></div>
        <button onClick={()=>{setDraft({...r});setEditing(r)}} className="rounded-lg border border-white/10 px-3 py-2 text-xs">Edit</button>
        <button onClick={()=>remove(table,r.id)} className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-300">Delete</button>
      </div>)}
    </div>
    {current && <div className={cardClass+' space-y-4'}>
      <div className="flex items-center justify-between"><h3 className="font-bold">{editing?.id && rows.some((x:any)=>x.id===editing.id) ? 'Edit' : 'Add'} {title}</h3><button onClick={()=>{setEditing(null);setDraft(null)}} className="text-xs text-gray-500">Close</button></div>
      {fields(current,setDraft)}
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={current.is_visible!==false} onChange={e=>setDraft({...current,is_visible:e.target.checked})}/> Visible on website</label>
        <Field label="Order" value={current.sort_order ?? 0} type="number" onChange={(v:string)=>setDraft({...current,sort_order:Number(v)})}/>
      </div>
      <button onClick={()=>save(table,current,editing?.id && rows.some((x:any)=>x.id===editing.id) ? editing.id : undefined)} className="rounded-xl bg-[#d4af37] px-5 py-3 font-bold text-black">Save changes</button>
    </div>}
  </div>;
}
