export interface ProfilePageData {
  pageNumber: number;
  pageTitle: string;
  category: string;
  badge?: string;
  headline?: string;
  subheadline?: string;
  description?: string;
  image?: string;
}

export const PROFILE_PAGES_META = [
  { pageNumber: 1, title: "Cover Page", label: "কভার পেজ (Corporate Profile 2026)" },
  { pageNumber: 2, title: "About Company", label: "কোম্পানি পরিচিতি (About Us & Vision)" },
  { pageNumber: 3, title: "Proprietor's Message", label: "প্রোপাইটরের বাণী (Message & Estd 2016)" },
  { pageNumber: 4, title: "Vision, Mission & Values", label: "ভিশন, মিশন ও ৮টি মূল নীতি" },
  { pageNumber: 5, title: "Our Services", label: "আমাদের সেবাসমূহ (৯টি কনস্ট্রাকশন + ৯টি ম্যানপাওয়ার)" },
  { pageNumber: 6, title: "Why Choose Us?", label: "কেন আমাদের বেছে নেবেন (৮টি কারণ ও ৫টি স্ট্যাট)" },
  { pageNumber: 7, title: "Our Projects", label: "সম্পন্নকৃত প্রজেক্টসমূহ (৬টি ল্যান্ডমার্ক প্রজেক্ট)" },
  { pageNumber: 8, title: "Contact Information", label: "অফিসিয়াল যোগাযোগ ও তথ্য (QR Code)" },
  { pageNumber: 9, title: "Back Cover", label: "ব্যাক কভার ও সমাপনী (Excellence Seal)" }
];

export const PROFILE_STATS = [
  { value: "10+", label: "Years of Experience", subtext: "অভিজ্ঞতার বছর" },
  { value: "500+", label: "Skilled Workers", subtext: "দক্ষ জনবল" },
  { value: "100+", label: "Projects Completed", subtext: "সফল প্রজেক্ট" },
  { value: "100%", label: "Safety Commitment", subtext: "নিরাপত্তা নিশ্চয়তা" },
  { value: "100%", label: "Client Satisfaction", subtext: "গ্রাহক সন্তুষ্টি" }
];

export const PROFILE_SERVICES_CONSTRUCTION = [
  { name: "Residential Building", desc: "We build modern, safe and comfortable residential buildings." },
  { name: "Commercial Building", desc: "High-quality commercial spaces designed for business growth." },
  { name: "Industrial Building", desc: "Strong and reliable industrial structures built to last." },
  { name: "RCC Frame Structure", desc: "Expert in RCC structure with modern engineering solutions." },
  { name: "Brick Masonry Work", desc: "Professional brick work ensuring strength and durability." },
  { name: "Plaster Work", desc: "Smooth and durable plastering with perfect finishing." },
  { name: "Tile Work", desc: "High-quality tiles work for beautiful and long-lasting finish." },
  { name: "Painting Work", desc: "Interior and exterior painting with premium quality." },
  { name: "Finishing Work", desc: "Complete finishing solutions with attention to every detail." }
];

export const PROFILE_SERVICES_MANPOWER = [
  { name: "Civil Engineer", desc: "Qualified civil engineers for planning, designing and supervision." },
  { name: "Site Engineer", desc: "Experienced site engineers to ensure smooth project execution." },
  { name: "Construction Foreman", desc: "Skilled foremen to manage site activities efficiently." },
  { name: "Rod Binder", desc: "Experienced rod binders for strong and secure reinforcement work." },
  { name: "Mason", desc: "Skilled masons for quality brick work and structure." },
  { name: "Carpenter", desc: "Professional carpenters for formwork, doors, windows and more." },
  { name: "Welder", desc: "Expert welders (MIG, ARC) for all types of welding works." },
  { name: "Electrician", desc: "Certified electricians for safe and reliable electrical works." },
  { name: "Helper", desc: "Hardworking helpers to support all kinds of construction activities." }
];

export const PROFILE_VALUES_8 = [
  {
    id: "v1",
    title: "INTEGRITY",
    desc: "We conduct our business with honesty, fairness and transparency.",
    icon: "Shield"
  },
  {
    id: "v2",
    title: "QUALITY",
    desc: "We are committed to delivering the highest quality in everything we do.",
    icon: "Award"
  },
  {
    id: "v3",
    title: "SAFETY",
    desc: "Safety is our priority. We follow strict standards to protect lives and assets.",
    icon: "HardHat"
  },
  {
    id: "v4",
    title: "TRUST",
    desc: "We build trust through our actions, reliability and long-term commitment.",
    icon: "Handshake"
  },
  {
    id: "v5",
    title: "TEAMWORK",
    desc: "We believe in the power of teamwork and collaboration to achieve great results.",
    icon: "Users"
  },
  {
    id: "v6",
    title: "INNOVATION",
    desc: "We embrace new ideas, technology and methods to improve our performance.",
    icon: "Lightbulb"
  },
  {
    id: "v7",
    title: "COMMITMENT",
    desc: "We are dedicated to meeting our promises and exceeding expectations.",
    icon: "Clock"
  },
  {
    id: "v8",
    title: "CUSTOMER FOCUS",
    desc: "Our clients are at the heart of our business. Their success is our success.",
    icon: "HeartHandshake"
  }
];

export const PROFILE_WHY_US_8 = [
  {
    title: "EXPERIENCED TEAM",
    desc: "Our team consists of highly skilled professionals with years of hands-on experience in construction and manpower supply."
  },
  {
    title: "CLIENT SATISFACTION",
    desc: "Our clients' satisfaction is our success. We work closely with our clients to exceed their expectations."
  },
  {
    title: "QUALITY ASSURANCE",
    desc: "We maintain the highest standards of quality in every project to ensure durability, safety and client satisfaction."
  },
  {
    title: "COMPETITIVE PRICING",
    desc: "We offer high-quality services at competitive prices to deliver the best value for your investment."
  },
  {
    title: "SAFETY FIRST",
    desc: "We follow strict safety procedures to ensure a safe working environment for our workers and clients."
  },
  {
    title: "SKILLED MANPOWER",
    desc: "We provide trained, experienced and reliable manpower for all types of construction projects."
  },
  {
    title: "ON-TIME DELIVERY",
    desc: "We value time and are committed to completing projects within the agreed timeline."
  },
  {
    title: "MODERN TECHNOLOGY",
    desc: "We use modern equipment and advanced construction techniques to ensure efficiency and excellence."
  }
];

export const PROFILE_PROJECTS_6 = [
  {
    num: "01",
    name: "RESIDENTIAL BUILDING",
    location: "Gulshan, Dhaka",
    year: "2023",
    desc: "G+5 Storied Residential Building",
    image: "/images/projects/project-01-gulshan.jpg"
  },
  {
    num: "02",
    name: "COMMERCIAL BUILDING",
    location: "Motijheel, Dhaka",
    year: "2022",
    desc: "G+7 Storied Commercial Building",
    image: "/images/projects/project-02-motijheel.jpg"
  },
  {
    num: "03",
    name: "INDUSTRIAL WAREHOUSE",
    location: "Gazipur, Dhaka",
    year: "2023",
    desc: "Industrial Warehouse Building",
    image: "/images/projects/project-03-gazipur.jpg"
  },
  {
    num: "04",
    name: "RCC FRAME STRUCTURE",
    location: "Uttara, Dhaka",
    year: "2022",
    desc: "RCC Frame (G+6)",
    image: "/images/projects/project-04-uttara.jpg"
  },
  {
    num: "05",
    name: "DUPLEX RESIDENCE",
    location: "Purbachal, Dhaka",
    year: "2023",
    desc: "Duplex House (G+1)",
    image: "/images/projects/project-05-purbachal.jpg"
  },
  {
    num: "06",
    name: "EDUCATIONAL BUILDING",
    location: "Narayanganj",
    year: "2022",
    desc: "School Building (G+4)",
    image: "/images/projects/project-06-narayanganj.jpg"
  }
];
