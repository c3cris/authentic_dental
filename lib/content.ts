// All marketing content lives here so pages stay declarative.
export const CERTS = [
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/AdvancedCertifiedLogo-150x150.jpg", label: "Advanced Certified" },
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/pankeyinstitute-150x150.jpg", label: "Pankey Institute" },
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/terec-150x150.jpg", label: "TEREC Group" },
  { src: "https://authenticlab.com/wp-content/uploads/2019/07/PACElogo-150x150.jpg", label: "AGD PACE" },
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/nadl-150x150.jpg", label: "NADL" },
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/nbc-150x150.jpg", label: "NBC" },
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/lava-150x150.jpg", label: "3M Lava" },
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/valplast-150x150.jpg", label: "Valplast" },
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/dlat-150x150.jpg", label: "DLAT" },
  { src: "https://authenticlab.com/wp-content/uploads/2017/11/ptc-150x150.jpg", label: "PTC" },
];

export const TESTIMONIALS = [
  { quote: "To achieve truly successful restorative dentistry you must work with a lab that understands occlusion. Authentic has been that lab for me.", name: "Dr. Jack Shirley, DDS", role: "Past President, Board of Trustees, The Pankey Institute" },
  { quote: "I confidently recommend Authentic to fabricate not only traditional crown & bridge work, but for implant crowns and custom abutments. Wonderful quality and timely turnaround.", name: "Dr. A. Retana", role: "San Antonio, TX" },
  { quote: "I switched to Authentic in 2008 and never looked back — consistent quality, customer service, and one-on-one technical assistance. You don't get that kind of service at most labs today.", name: "Dr. A. Maldonado", role: "San Antonio, TX" },
];

export const HOME_CARDS = [
  { title: "Restorations", img: "/restorations/pfm.jpg", desc: "Meticulously crafted crowns, bridges, and implants using industry-leading materials like Zirconia and E.max.", cta: "Learn More", href: "/restorations" },
  { title: "Operatory Products", img: "https://authenticlab.com/wp-content/uploads/2020/06/dentist-showing-jaws-model-to-patient-in-dental-clinic-picture-id668250262.jpg", desc: "Becoming your dental resource — guidance and knowledge on the latest techniques, materials, and procedures.", cta: "View Services", href: "/services" },
  { title: "Seminars", img: "https://authenticlab.com/wp-content/uploads/2018/03/LEC.jpg", desc: "20–30 CE programs per year featuring respected lecturers, as featured in Dentistry Today.", cta: "Register Now", href: "/seminars" },
];

export const NEWSLETTER_TOPICS = [
  "Great Impression Tips", "Know ALL Your Zirconia Restorations", "Preventing Problems Cementing Zirconia",
  "Minimize Shade Remakes", "Successful Bite Registration", "Custom Base vs. Ti Base Abutments",
  "Digital Dentistry: Connect with Your Lab", "Night Guards, Occlusal Guards, Splints",
];

export const NEWSLETTER_ARCHIVE = [
  "Great Impression Tips", "Remakes & Retakes", "Know ALL Your Zirconia Restorations",
  "Time & Temperature Impression Taking", "Crown Under an Existing Partial", "Preventing Problems Cementing Zirconia",
  "Minimize Shade Remakes", "High Occlusion & Improper Contacts", "Successful Bite Registration",
  "Custom Base vs. Ti Base Abutments", "Reduce Crown Seating Time", "2-Cord Impression Technique",
  "Primary Reasons for Zirconia Failure", "Digital Dentistry: Connect with Your Lab", "Night Guards, Occlusal Guards, Splints",
  "Implants & Abutments", "Implants: Fixed & Removable", "E.max Prep Guide",
];

export const EXPERTISE = [
  "L.D. Pankey Institute", "National Association of Dental Laboratories (NADL)", "Productivity Training Corporation (PTC)",
  "Texas Dental Laboratory Association (TDLA)", "Technical Research Consortium (TEREC)", "Sulzer Medica Preferred Laboratory Network",
  "Certified 3M Lava Milling Center", "Certified in CEREC In-Lab Scanning & Milling", "Advanced Certification in CAPTEK",
  "Certified Platinum Member with Nobel Biocare", "Certified Trios Trainer", "Accepting STL files from all intraoral scanners",
];

export const ABOUT_CARDS = [
  { title: "About Us", img: "https://authenticlab.com/wp-content/uploads/2016/11/aboutus_new.jpg", desc: "Founded in 1984 on principles of building relationships through education, excelling in customer service, and delivering a consistent product with every case." },
  { title: "Training", img: "https://authenticlab.com/wp-content/uploads/2016/11/doctor-563429_1920-copy.jpg", desc: "Technicians are trained on our comprehensive internal standard system — a shared vocabulary and benchmark. We're a proud AGD PACE approved CE provider." },
  { title: "Community", img: "https://authenticlab.com/wp-content/uploads/2018/04/clients-austin-cosmetic-assets-images-web-giving-back-600x400.jpg", desc: "We give back through volunteer groups, non-profits and charity, and work closely with universities and local colleges, offering an internship program." },
];

export type RestItem = { name: string; img: string; desc: string };
export const REST_GROUPS: { group: string; items: RestItem[] }[] = [
  { group: "Zirconia", items: [
    { name: "Full Contour Zirconia", img: "/restorations/Full-Contour-Zirconia-4.jpg", desc: "Durable, monolithic full-contour zirconia crowns and bridges." },
    { name: "Anterior HT Zirconia", img: "/restorations/New-Zirconia-Anterior-3.jpg", desc: "High-translucency zirconia for natural anterior esthetics." },
    { name: "Layered Zirconia", img: "/restorations/Layered-Zirconia-3.jpg", desc: "Zirconia core veneered with porcelain for lifelike depth." },
    { name: "Hybrid Zirconia", img: "/restorations/Hybrid-Zirconia-3.jpg", desc: "Ideal when occlusal clearance is a challenge — zirconia occlusal, porcelain veneer." },
  ]},
  { group: "E.max / Lithium Disilicate", items: [
    { name: "E.max", img: "/restorations/emax-2.jpg", desc: "Singles anywhere in the mouth and anterior bridges to the 2nd bicuspid." },
    { name: "E.max Layered", img: "/restorations/emaxlayered-2.jpg", desc: "Lithium disilicate framework with a porcelain ceramic overlay." },
    { name: "E.max Veneer", img: "/restorations/Emax-Veneer-3.jpg", desc: "Minimal-prep veneers with the natural 'contact lens' effect." },
    { name: "E.max Bridge", img: "/restorations/emaxbridge-3.jpg", desc: "All-ceramic bridgework with superior esthetics." },
  ]},
  { group: "PFM & Implants", items: [
    { name: "PFM", img: "/restorations/pfm.jpg", desc: "Advanced porcelains with opalescence and natural fluorescence." },
    { name: "Implants", img: "/restorations/implants-2.jpg", desc: "Team approach with diagnostic case planning and cost estimation." },
    { name: "Implant Milled Bars", img: "/restorations/Implants-Milled-Bars-3.jpg", desc: "Precision-milled bars for challenging implant placements." },
    { name: "Implant Zirconia Bridge", img: "/restorations/Implant-Zirconia-Bridge-3.jpg", desc: "Full-arch implant-supported zirconia bridgework." },
  ]},
  { group: "Removable & Appliances", items: [
    { name: "Removable Over Denture", img: "/restorations/removableoverdentures-4.jpg", desc: "Over dentures with secure attachment systems." },
    { name: "Overdenture Bar", img: "/restorations/overdenturebar-3.jpg", desc: "Milled bar substructures for stable retention." },
    { name: "Partial w/ Metal Frame", img: "/restorations/partialwmetalframe-3.jpg", desc: "Precision cast metal-frame partials." },
    { name: "Valplast Partial", img: "/restorations/valplastpartial-3.jpg", desc: "Flexible, metal-free Valplast partials." },
    { name: "Night Guard / Splint", img: "/restorations/nightguard-3.jpg", desc: "Custom occlusal guards and bite splints." },
    { name: "Full Denture Setup", img: "/restorations/fulldenture-1.jpg", desc: "Complete denture try-in and setup." },
  ]},
];

export const ORTHO = [
  { img: "/restorations/2095.jpg", title: "Retainers" },
  { img: "/restorations/2092.jpg", title: "Expanders" },
  { img: "/restorations/2091.jpg", title: "Functional Appliances" },
];

export const SERVICES = [
  { title: "CAD/CAM Milling Center", icon: "precision_manufacturing", desc: "The most advanced milling center in Texas for crowns, bridges, bars, and custom abutments." },
  { title: "Digital & Intraoral Scans", icon: "3d_rotation", desc: "We accept STL files from all intraoral scanners — TRIOS, CEREC, iTero, and more." },
  { title: "Implant Case Planning", icon: "build", desc: "A team approach with diagnostic case plans, surgical guidance, and cost estimation." },
  { title: "Custom Shade Service", icon: "palette", desc: "In-office and digital shade matching, including the patented Shade Wand technology." },
  { title: "Pickup & Delivery", icon: "local_shipping", desc: "Reliable scheduled pickup, plus prepaid UPS shipping labels for out-of-area practices." },
  { title: "One-on-One Technical Support", icon: "support_agent", desc: "Direct access to our technicians for parts compatibility, materials, and troubleshooting." },
  { title: "Continuing Education", icon: "school", desc: "20–30 AGD PACE approved CE programs per year for you and your team." },
  { title: "Fee Schedule & Lab Kits", icon: "request_quote", desc: "Request a current fee schedule or an introductory laboratory kit to get started." },
  { title: "Remake Support", icon: "autorenew", desc: "Clinical guidance on impressions, occlusion, and shade to minimize remakes." },
];

export const SEMINAR_TOPICS = [
  "Digital Dentistry & Lab Connectivity", "Zirconia: Selection & Cementation", "Impression Techniques That Work",
  "Occlusion & Bite Registration", "Implants & Custom Abutments", "Esthetics: Shade & Material Selection",
  "Night Guards & Occlusal Appliances", "Treatment Planning Complex Cases", "Minimizing Remakes & Retakes",
];

export const HERO_IMG = "https://authenticlab.com/wp-content/uploads/2020/06/happy-dentist-patient-checking-whitening-results-picture-id1055182040.jpg";
export const PRESIDENT_IMG = "https://authenticlab.com/wp-content/uploads/2024/01/Bobs-New-Pic-2024.jpg";
export const SEMINAR_IMG = "https://authenticlab.com/wp-content/uploads/2018/03/LEC.jpg";
export const YT_EMBED = "https://www.youtube.com/embed/He0lqtp3wg4?rel=0&showinfo=0";
export const YT_CHANNEL = "https://www.youtube.com/channel/UC6-RJKGcEmRZiOL55usGEKA";
export const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13893.893022373995!2d-98.5764639!3d29.473388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e98c70348cdde93!2sAuthentic+Dental+Laboratory%2C+Inc.!5e0!3m2!1sen!2sus!4v1510705020247";
