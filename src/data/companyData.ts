import { ServiceItem, WorkerCategory, ProjectItem, GalleryItem } from '../types';

export const COMPANY_INFO = {
  name: "SOHANUR CONSTRUCTION & MANPOWER SOLUTION",
  shortName: "SCMS Bangladesh",
  tagline: "BUILDING TRUST, DELIVERING QUALITY",
  business: "Construction & Manpower Supply Solution Provider",
  proprietor: "MD. SOHANUR ROHOMAN SOHAN",
  proprietorTitle: "Proprietor",
  estd: "2016",
  website: "www.sohanurconstruction.com",
  proprietorPhoto: "/images/proprietor/proprietor.jpg",
  phones: [
    { display: "+8801805-090910", raw: "+8801805090910" },
    { display: "+8801805-090950", raw: "+8801805090950" }
  ],
  email: "scms.owner@gmail.com",
  location: "Naogaon Sadar, Naogaon, Bangladesh",
  whatsAppUrl: "https://wa.me/message/Y2CJQ7HLS7STE1",
  workingHours: "Saturday - Thursday: 8:00 AM - 8:00 PM (24/7 Emergency site support)",
  defaultWhatsAppMessage: `Hello SOHANUR CONSTRUCTION & MANPOWER SOLUTION,\n\nI am interested in your services.\n\nMy requirement:\nProject Location:\nService Required:\nAdditional Details:\n\nPlease contact me.`
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "service-01",
    number: "SERVICE 01",
    title: "Building Construction Contractor",
    shortDesc: "Complete building construction services for residential, commercial and other construction projects.",
    fullDesc: "We undertake end-to-end building construction contracts tailored to architectural blueprints, structural engineering standards, and client specifications. From preliminary foundation and RCC work to brickwork, finishing, and structural inspection, we ensure rigorous quality control and strict timeline adherence.",
    iconName: "Building2",
    image: "/images/services/service-01-building-construction.jpg",
    highlights: [
      "Residential multi-storey buildings",
      "Commercial plazas & retail complexes",
      "Industrial sheds & warehouses",
      "Structural RCC framing & load-bearing masonry"
    ],
    category: "construction"
  },
  {
    id: "service-02",
    number: "SERVICE 02",
    title: "Construction Manpower Supply",
    shortDesc: "Reliable skilled and unskilled manpower according to project requirements.",
    fullDesc: "We provide vetted, experienced, and dedicated construction labor across all trades. Whether you need a short-term reinforcement team to meet critical project milestones or long-term workforce deployment for large-scale developments, our flexible supply models match your exact timeline.",
    iconName: "Users",
    image: "/images/services/service-02-manpower-supply.jpg",
    highlights: [
      "Skilled, semi-skilled & helper workforce",
      "Rapid on-site mobilization across Bangladesh",
      "Experienced foremen & team leaders",
      "Flexible contracts (daily, weekly, project-based)"
    ],
    category: "manpower"
  },
  {
    id: "service-03",
    number: "SERVICE 03",
    title: "Rod & Steel Fixing",
    shortDesc: "Professional rod binding, reinforcement and steel fixing workers.",
    fullDesc: "Specialized steel benders and rod binding craftsmen trained in structural reinforcement schedules (BBS), slab rebar laying, column fabrication, foundation cage assembling, and beam reinforcement with precision alignment and safety compliance.",
    iconName: "Layers",
    image: "/images/services/service-03-rod-steel-fixing.jpg",
    highlights: [
      "Bar bending schedule (BBS) precision execution",
      "Heavy foundation raft rebar fixing",
      "Column, beam, and suspended slab binding",
      "Quality rebar spacing, chairs, and cover blocks"
    ],
    category: "construction"
  },
  {
    id: "service-04",
    number: "SERVICE 04",
    title: "Raj Mistri / Mason",
    shortDesc: "Experienced brick masonry, plaster and civil construction workers.",
    fullDesc: "Master bricklayers (Raj Mistri) with extensive hands-on expertise in 5-inch, 10-inch, and cavity brick walls, cement plastering, surface leveling, beam casting, lintels, and aesthetic brick facade detailing for durable and crack-free structures.",
    iconName: "Hammer",
    image: "/images/services/service-04-raj-mistri-mason.jpg",
    highlights: [
      "Solid & hollow brick laying with mortar line precision",
      "Internal wall plastering & external rough-cast plaster",
      "Lintel, sunshade, and drop-wall casting",
      "Waterproofing screed & floor leveling"
    ],
    category: "construction"
  },
  {
    id: "service-05",
    number: "SERVICE 05",
    title: "Carpenter & Shuttering",
    shortDesc: "Professional carpenters and shuttering/formwork workers.",
    fullDesc: "Accurate formwork carpenters adept at plywood, steel shuttering, scaffolding assembly, column boxes, slab decking, and staircase shuttering engineered to withstand high-pressure wet concrete loads without deflection or slurry leakage.",
    iconName: "Wrench",
    image: "/images/services/service-05-carpenter-shuttering.jpg",
    highlights: [
      "Heavy-duty slab, column, and beam formwork",
      "Plywood, marine board & steel plate shuttering",
      "Tubular & pipe scaffolding erection",
      "Precision leveling, plumb checking & leak-tight joints"
    ],
    category: "construction"
  },
  {
    id: "service-06",
    number: "SERVICE 06",
    title: "Welder Supply",
    shortDesc: "MIG Welder, 6G Welder and general welding manpower.",
    fullDesc: "Certified and highly proficient welding professionals for heavy structural steel erection, industrial truss fabrication, pressure piping, tank welding, and architectural metalwork adhering strictly to safety standards.",
    iconName: "Flame",
    image: "/images/services/service-06-welder-supply.jpg",
    highlights: [
      "6G pipe welding & pressure vessels",
      "MIG/MAG & TIG precision welding",
      "Structural steel trusses, purlins & rafters",
      "General arc welding and on-site iron fabrication"
    ],
    category: "manpower"
  },
  {
    id: "service-07",
    number: "SERVICE 07",
    title: "Construction Helper",
    shortDesc: "Reliable skilled and unskilled helpers for construction projects.",
    fullDesc: "Energetic, hard-working, and punctual construction helpers to support material handling, concrete batching, mortar mixing, site cleaning, excavation assistance, and continuous support to master craftsmen for uninterrupted workflow.",
    iconName: "HardHat",
    image: "/images/services/service-07-construction-helper.jpg",
    highlights: [
      "Heavy material loading, unloading & staging",
      "Concrete mixing, wheelbarrow transport & pouring",
      "Site clearing, debris removal & safety upkeep",
      "Dependable daily attendance and cooperative work ethic"
    ],
    category: "manpower"
  },
  {
    id: "service-08",
    number: "SERVICE 08",
    title: "Site Supervision & Workforce Coordination",
    shortDesc: "Responsible manpower coordination and construction site supervision.",
    fullDesc: "Experienced site supervisors and site foremen to oversee daily labor deployment, track work milestones, coordinate between engineers and craftsmen, enforce site safety protocols, and guarantee standard material usage without wastage.",
    iconName: "ClipboardCheck",
    image: "/images/services/service-08-site-supervision.jpg",
    highlights: [
      "Daily workforce roster & attendance tracking",
      "Drawing interpretation & execution verification",
      "Material quality check and wastage minimization",
      "Direct client reporting & progress coordination"
    ],
    category: "specialized"
  }
];

export const WORKER_CATEGORIES: WorkerCategory[] = [
  {
    id: "rod-mistri",
    name: "ROD MISTRI",
    bengaliTitle: "রড মিস্ত্রি",
    category: "Steel Reinforcement",
    shortDesc: "Skilled rebar technicians who cut, bend, and assemble steel rods according to structural engineering drawings.",
    skills: ["Bar Bending Schedule", "Beam/Column Binding", "Slab Mesh Fixing", "Shear Wall Reinforcement"],
    iconName: "Layers",
    image: "/images/manpower/worker-01-rod-mistri.jpg"
  },
  {
    id: "raj-mistri",
    name: "RAJ MISTRI",
    bengaliTitle: "রাজ মিস্ত্রি",
    category: "Civil & Masonry",
    shortDesc: "Experienced brick masons specializing in precision bricklaying, wall alignment, mortar balancing, and fine cement plastering.",
    skills: ["Brickwork (5\" & 10\")", "Smooth Wall Plaster", "Concrete Casting", "Surface Leveling"],
    iconName: "Hammer",
    image: "/images/manpower/worker-02-raj-mistri.jpg"
  },
  {
    id: "steel-fixer",
    name: "STEEL FIXER",
    bengaliTitle: "স্টিল ফিক্সার",
    category: "Structural Steel",
    shortDesc: "Precision steel fixers handling heavy foundations, pre-cast steel elements, and high-tensile rebar configurations.",
    skills: ["Foundation Raft Fixing", "Heavy Columns & Piles", "Spacing & Cover Blocks", "Tying Wire Efficiency"],
    iconName: "ShieldCheck",
    image: "/images/manpower/worker-03-steel-fixer.jpg"
  },
  {
    id: "carpenter",
    name: "CARPENTER",
    bengaliTitle: "কার্পেন্টার / শাটারিং মিস্ত্রি",
    category: "Shuttering & Formwork",
    shortDesc: "Wood and steel shuttering carpenters preparing leak-proof formwork molds for slabs, beams, columns, and stairs.",
    skills: ["Formwork Fabrication", "Steel & Plywood Shuttering", "Scaffolding Safety", "Accurate Plumb Line"],
    iconName: "Wrench",
    image: "/images/manpower/worker-04-carpenter.jpg"
  },
  {
    id: "mig-welder",
    name: "MIG WELDER",
    bengaliTitle: "এমআইজি ওয়েল্ডার",
    category: "Metal Fabrication",
    shortDesc: "Trained Metal Inert Gas (MIG) welders for fast, clean, and strong welds on structural steel and fabrication projects.",
    skills: ["MIG/GMAW Welding", "Structural Beams", "Metal Fabrication", "Clean Bead Finish"],
    iconName: "Flame",
    image: "/images/manpower/worker-05-mig-welder.jpg"
  },
  {
    id: "6g-welder",
    name: "6G WELDER",
    bengaliTitle: "৬জি ওয়েল্ডার",
    category: "High-Pressure Welding",
    shortDesc: "Certified 6G position welders capable of welding pipes and critical joints in all fixed orientations under rigorous testing.",
    skills: ["6G Pipe Position", "Pressure Vessel Joints", "X-Ray Quality Welding", "High-Spec Metallurgy"],
    iconName: "Shield",
    image: "/images/manpower/worker-06-6g-welder.jpg"
  },
  {
    id: "general-welder",
    name: "GENERAL WELDER",
    bengaliTitle: "জেনারেল ওয়েল্ডার",
    category: "Site Welding",
    shortDesc: "Versatile arc welders for day-to-day site welding, safety railings, window grills, structural anchors, and repair works.",
    skills: ["SMAW / Shielded Arc", "Gate & Grille Fabrication", "Angle Iron & Channel", "On-site Fast Repairs"],
    iconName: "Zap",
    image: "/images/manpower/worker-07-general-welder.jpg"
  },
  {
    id: "foreman",
    name: "FOREMAN",
    bengaliTitle: "ফোরম্যান",
    category: "Workforce Leadership",
    shortDesc: "Experienced site foremen who bridge management and trade teams, directing daily tasks and ensuring productive output.",
    skills: ["Team Allocation", "Daily Task Briefing", "Material Requesting", "Execution Monitoring"],
    iconName: "UserCheck",
    image: "/images/manpower/worker-08-foreman.jpg"
  },
  {
    id: "site-supervisor",
    name: "SITE SUPERVISOR",
    bengaliTitle: "সাইট সুপারভাইজার",
    category: "Quality & Safety",
    shortDesc: "Professional supervisors overseeing drawing compliance, safety guidelines, concrete testing, and schedule tracking.",
    skills: ["Plan Interpretation", "Quality Assurance (QA)", "Safety (PPE) Enforcement", "Client Coordination"],
    iconName: "ClipboardCheck",
    image: "/images/manpower/worker-09-site-supervisor.jpg"
  },
  {
    id: "construction-helper",
    name: "CONSTRUCTION HELPER",
    bengaliTitle: "নির্মাণ হেল্পার / যোগালী",
    category: "General Workforce",
    shortDesc: "Hardworking and reliable general helpers for material carrying, concrete pouring assistance, digging, and jobsite cleanup.",
    skills: ["Mortar Mixing", "Material Staging", "Site Cleaning", "Manual Excavation Support"],
    iconName: "HardHat",
    image: "/images/manpower/worker-10-construction-helper.jpg"
  }
];

export const CONTRACTING_SERVICES_LIST = [
  "Building construction",
  "RCC work",
  "Rod binding",
  "Steel fixing",
  "Shuttering",
  "Concrete work",
  "Brick masonry",
  "Plaster work",
  "General civil construction",
  "Construction workforce management",
  "Site supervision"
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "SEND YOUR REQUIREMENT",
    desc: "Tell us about your construction project or manpower requirement via a direct phone call, WhatsApp, or email."
  },
  {
    step: "02",
    title: "DISCUSS YOUR NEED",
    desc: "Our team discusses manpower size, trade categories, work scope, project location, and scheduling requirements."
  },
  {
    step: "03",
    title: "GET OUR PROPOSAL",
    desc: "Receive the appropriate quotation, transparent rate breakdown, and workforce deployment proposal."
  },
  {
    step: "04",
    title: "START THE WORK",
    desc: "After mutual confirmation, civil construction or vetted manpower deployment begins strictly according to agreement."
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Skilled & Experienced Workforce",
    desc: "Every craftsman and helper in our network has verified practical experience across diverse civil projects."
  },
  {
    title: "Professional Construction Service",
    desc: "We follow engineering standards, drawings, and quality control from foundation to roof casting."
  },
  {
    title: "Responsible Management",
    desc: "Direct proprietor and supervisory accountability for timely execution, site discipline, and team safety."
  },
  {
    title: "Quality Workmanship",
    desc: "Clean finishes, precise steel tying, leak-free formwork, and durable brickwork you can inspect."
  },
  {
    title: "Timely Project Support",
    desc: "Rapid mobilization of additional workforce whenever concrete pours or deadlines demand extra capacity."
  },
  {
    title: "Competitive Pricing",
    desc: "Transparent and honest rates tailored to current market standards in Bangladesh without hidden surprises."
  },
  {
    title: "Flexible Workforce Solutions",
    desc: "Choose from daily supply, piece-rate contracts, square-foot contracting, or dedicated monthly crews."
  },
  {
    title: "Client-Focused Service",
    desc: "We prioritize long-term client trust through transparent communication and responsive updates."
  },
  {
    title: "Construction & Manpower Under One Roof",
    desc: "Seamless single-source accountability eliminates finger-pointing between contractors and laborers."
  }
];

// Official Completed Projects as featured in SCMS Corporate Profile 2026 (Page 07)
export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "proj-01",
    name: "Residential Building (G+5)",
    location: "Gulshan, Dhaka, Bangladesh",
    projectType: "Residential",
    category: "CONSTRUCTION",
    status: "COMPLETED",
    shortDesc: "G+5 Storied Residential Building featuring complete civil structural execution and architectural finishing (Year: 2023).",
    fullDesc: "Complete turnkey civil contracting for a modern G+5 storied residential apartment building in Gulshan, Dhaka. Completed in 2023 with precision RCC framing, high-grade reinforcement binding, brick masonry, smooth plastering, and premium finishing.",
    servicesProvided: ["Residential Building Construction", "RCC Frame Structure", "Brick Masonry Work", "Finishing Work"],
    image: "/images/projects/project-01-gulshan.jpg",
    gallery: [
      "/images/projects/project-01-gulshan.jpg"
    ]
  },
  {
    id: "proj-02",
    name: "Commercial Building (G+7)",
    location: "Motijheel, Dhaka, Bangladesh",
    projectType: "Commercial",
    category: "CONSTRUCTION",
    status: "COMPLETED",
    shortDesc: "G+7 Storied Commercial Building designed for corporate enterprise and business growth (Year: 2022).",
    fullDesc: "Major commercial building execution in Dhaka's financial hub Motijheel. Scope covered multi-storey RCC frame, heavy-load floor slabs, high-accuracy shuttering carpentry, fire-safety compliant stairwells, and modern facade masonry.",
    servicesProvided: ["Commercial Building Construction", "Heavy RCC Casting", "Shuttering & Formwork", "Dedicated Civil Workforce"],
    image: "/images/projects/project-02-motijheel.jpg",
    gallery: [
      "/images/projects/project-02-motijheel.jpg"
    ]
  },
  {
    id: "proj-03",
    name: "Industrial Warehouse Building",
    location: "Gazipur, Dhaka, Bangladesh",
    projectType: "Industrial",
    category: "CONSTRUCTION",
    status: "COMPLETED",
    shortDesc: "Large-span Industrial Warehouse Building constructed with high durability and heavy-duty load capacity (Year: 2023).",
    fullDesc: "High-spec industrial warehouse facility in the industrial zone of Gazipur, Dhaka. Engineered for manufacturing logistics, featuring heavy structural steel integration, certified MIG welding, reinforced flooring, and weather-tight roofing.",
    servicesProvided: ["Industrial Building Construction", "Heavy Flooring Casting", "Steel Truss Welding", "Site Supervision"],
    image: "/images/projects/project-03-gazipur.jpg",
    gallery: [
      "/images/projects/project-03-gazipur.jpg"
    ]
  },
  {
    id: "proj-04",
    name: "RCC Frame Structure (G+6)",
    location: "Uttara, Dhaka, Bangladesh",
    projectType: "Civil RCC",
    category: "CONSTRUCTION",
    status: "COMPLETED",
    shortDesc: "Complete RCC Frame Structure (G+6) with precision rebar fabrication and concrete pouring (Year: 2022).",
    fullDesc: "Robust multi-storey structural skeleton executed in Uttara, Dhaka. Delivered with specialized rod binders, shuttering carpenters, and certified concrete vibrator teams to achieve crack-free, monolithic structural strength.",
    servicesProvided: ["RCC Frame Construction", "Rod Binding", "Column & Beam Shuttering", "Quality Inspection"],
    image: "/images/projects/project-04-uttara.jpg",
    gallery: [
      "/images/projects/project-04-uttara.jpg"
    ]
  },
  {
    id: "proj-05",
    name: "Duplex Residence (G+1)",
    location: "Purbachal, Dhaka, Bangladesh",
    projectType: "Residential",
    category: "CONSTRUCTION",
    status: "COMPLETED",
    shortDesc: "Modern Luxury Duplex House (G+1) featuring bespoke architectural detailing and fine masonry (Year: 2023).",
    fullDesc: "Bespoke contemporary duplex residence in Purbachal New Town, Dhaka. High-end civil structural work, decorative brick patterns, smooth exterior plaster, terrace waterproofing, and premium finishing.",
    servicesProvided: ["Duplex Residence Contracting", "Brick Masonry Work", "Smooth Plaster Work", "Finishing Solutions"],
    image: "/images/projects/project-05-purbachal.jpg",
    gallery: [
      "/images/projects/project-05-purbachal.jpg"
    ]
  },
  {
    id: "proj-06",
    name: "Educational Institution Building (G+4)",
    location: "Narayanganj, Bangladesh",
    projectType: "Institutional",
    category: "CONSTRUCTION",
    status: "COMPLETED",
    shortDesc: "G+4 Storied School / Educational Building built to high safety and institutional standards (Year: 2022).",
    fullDesc: "Spacious institutional educational building with wide stairwells, reinforced concrete classrooms, assembly halls, and durable finishes built for heavy daily student footfall and long-term structural integrity.",
    servicesProvided: ["Educational Building Construction", "Wide Slab Shuttering", "Masonry & Plaster", "Safety Compliance"],
    image: "/images/projects/project-06-narayanganj.jpg",
    gallery: [
      "/images/projects/project-06-narayanganj.jpg"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "High-Rise Concrete Pouring & Crane Operation",
    category: "Construction Work",
    image: "/images/gallery/gallery-01.jpg",
    location: "Construction Site"
  },
  {
    id: "gal-2",
    title: "Precision Slab Rod Binding & Chair Spacers",
    category: "Rod Binding",
    image: "/images/gallery/gallery-02.jpg",
    location: "Rebar Yard"
  },
  {
    id: "gal-3",
    title: "Heavy Foundation Steel Fixing",
    category: "Steel Fixing",
    image: "/images/gallery/gallery-03.jpg",
    location: "Raft Foundation"
  },
  {
    id: "gal-4",
    title: "Column & Beam Formwork Carpentry",
    category: "Shuttering",
    image: "/images/gallery/gallery-04.jpg",
    location: "Building Floor 3"
  },
  {
    id: "gal-5",
    title: "Vibrated Concrete Slab Casting",
    category: "Concrete Work",
    image: "/images/gallery/gallery-05.jpg",
    location: "Roof Slab Level"
  },
  {
    id: "gal-6",
    title: "Skilled Masonry & Brickwork Construction",
    category: "Construction Work",
    image: "/images/gallery/gallery-06.jpg",
    location: "Residential Complex"
  },
  {
    id: "gal-7",
    title: "Structural Steel Welding & Truss Alignment",
    category: "Construction Sites",
    image: "/images/gallery/gallery-07.jpg",
    location: "Industrial Project"
  },
  {
    id: "gal-8",
    title: "Completed Commercial Building Facade & Civil Work",
    category: "Completed Work",
    image: "/images/gallery/gallery-08.jpg",
    location: "Commercial Plaza"
  },
  {
    id: "gal-9",
    title: "Active Jobsite Supervision & Daily Coordination",
    category: "Construction Sites",
    image: "/images/gallery/gallery-09.jpg",
    location: "Jobsite Briefing"
  }
];
