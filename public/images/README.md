# ছবি আপলোড ও ফাইল নির্দেশিকা (Image Upload Guide)

আপনার ওয়েবসাইটের সমস্ত ছবি এখন সম্পূর্ণভাবে প্রজেক্টের লোকাল ফোল্ডারে সংরক্ষিত আছে (`public/images/`)। আপনি আপনার আসল ও রিয়েল ছবিগুলো সরাসরি এই ফোল্ডারগুলোতে আপলোড বা প্রতিস্থাপন (Replace) করতে পারবেন।

---

## ফোল্ডার স্ট্রাকচার ও ছবির তালিকা (Folder Structure & File Mapping)

### ১. স্বত্বাধিকারীর আসল ছবি (Proprietor Photo)
- **পাথ:** `public/images/proprietor/proprietor.jpg`
- **বিকল্প পাথ:** `public/proprietor.jpg`
- **ব্যবহার:** ওয়েবসাইট হেডার, হিরো সেকশন ও "About Us / এক্সিকিউটিভ ডিরেক্টর" সেকশনে প্রদর্শিত হয়।
- **পরামর্শ:** আপনার পাসপোর্ট সাইজ বা পোর্ট্রেট ছবি এই নামে সেভ করে আপলোড করলেই সরাসরি সাইটে শো করবে।

---

### ২. প্রধান হিরো ব্যাকগ্রাউন্ড ছবি (Hero Background)
- **পাথ:** `public/images/hero/hero-bg.jpg`
- **ব্যবহার:** ওয়েবসাইটের টপ ব্যানার/হিরো সেকশনের ব্যাকগ্রাউন্ড।

---

### ৩. কনস্ট্রাকশন সার্ভিসসমূহের ছবি (Services Images)
- **ফোল্ডার:** `public/images/services/`
  - `service-01-building-construction.jpg` : Building Construction Contractor
  - `service-02-manpower-supply.jpg` : Construction Manpower Supply
  - `service-03-rod-steel-fixing.jpg` : Rod & Steel Fixing
  - `service-04-raj-mistri-mason.jpg` : Raj Mistri / Mason (রাজ মিস্ত্রি)
  - `service-05-carpenter-shuttering.jpg` : Carpenter & Shuttering (শাটারিং কাঠমিস্ত্রি)
  - `service-06-welder-supply.jpg` : Welder Supply (MIG, 6G & General)
  - `service-07-construction-helper.jpg` : Construction Helper (নির্মাণ হেল্পার / যোগালী)
  - `service-08-site-supervision.jpg` : Site Supervision & Coordination

---

### ৪. দক্ষ জনবল ও কারিগরদের ছবি (Manpower & Worker Trades)
- **ফোল্ডার:** `public/images/manpower/`
  - `worker-01-rod-mistri.jpg` : রড মিস্ত্রি
  - `worker-02-raj-mistri.jpg` : রাজ মিস্ত্রি
  - `worker-03-steel-fixer.jpg` : স্টিল ফিক্সার
  - `worker-04-carpenter.jpg` : কার্পেন্টার / শাটারিং মিস্ত্রি
  - `worker-05-mig-welder.jpg` : এমআইজি ওয়েল্ডার
  - `worker-06-6g-welder.jpg` : ৬জি ওয়েল্ডার
  - `worker-07-general-welder.jpg` : জেনারেল ওয়েল্ডার
  - `worker-08-foreman.jpg` : ফোরম্যান
  - `worker-09-site-supervisor.jpg` : সাইট সুপারভাইজার
  - `worker-10-construction-helper.jpg` : নির্মাণ হেল্পার

---

### ৫. সম্পন্ন প্রজেক্টসমূহের ছবি (Completed Projects)
- **ফোল্ডার:** `public/images/projects/`
  - `project-01-gulshan.jpg` : Residential Building (G+5), Gulshan
  - `project-02-motijheel.jpg` : Commercial Building (G+7), Motijheel
  - `project-03-gazipur.jpg` : Industrial Warehouse Building, Gazipur
  - `project-04-uttara.jpg` : RCC Frame Structure (G+6), Uttara
  - `project-05-purbachal.jpg` : Duplex Residence (G+1), Purbachal
  - `project-06-narayanganj.jpg` : Educational Institution Building (G+4), Narayanganj

---

### ৬. ফটো গ্যালারি (Jobsite Photo Gallery)
- **ফোল্ডার:** `public/images/gallery/`
  - `gallery-01.jpg` : High-Rise Concrete Pouring & Crane Operation
  - `gallery-02.jpg` : Precision Slab Rod Binding & Chair Spacers
  - `gallery-03.jpg` : Heavy Foundation Steel Fixing
  - `gallery-04.jpg` : Column & Beam Formwork Carpentry
  - `gallery-05.jpg` : Vibrated Concrete Slab Casting
  - `gallery-06.jpg` : Skilled Masonry & Brickwork Construction
  - `gallery-07.jpg` : Structural Steel Welding & Truss Alignment
  - `gallery-08.jpg` : Completed Commercial Building Facade
  - `gallery-09.jpg` : Active Jobsite Supervision & Daily Coordination

---

## ছবি কিভাবে পরিবর্তন বা আপলোড করবেন:
1. **পদ্ধতি ১ (সবচেয়ে সহজ - একই ফাইলের নাম রেখে রিপ্লেস করা):**
   আপনার আসল ছবিটির নাম উপরের ফাইলের নামের সাথে হুবহু মিলিয়ে (যেমন: `worker-01-rod-mistri.jpg` বা `proprietor.jpg`) ওই ফোল্ডারে আপলোড করে আগের ফাইলটি ওভাররাইট (Replace) করে দিন। কোডে কোনো হাত দিতে হবে না, ওয়েবসাইটে স্বয়ংক্রিয়ভাবে নতুন ছবি চলে আসবে!

2. **পদ্ধতি ২ (নতুন নামে আপলোড করলে):**
   আপনি যদি কোনো নতুন ছবি ভিন্ন নামে আপলোড করেন (যেমন: `my-site-real-photo.jpg`), তাহলে `src/data/companyData.ts` ফাইলে গিয়ে সংশ্লিষ্ট ছবির পাথ আপডেট করে দিলেই হবে।
