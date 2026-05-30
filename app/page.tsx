import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import { Icon } from "@/components/Icon";
import { Eyebrow, ButtonPrimary, ButtonGhost } from "@/components/ui";
import { Certifications } from "@/components/Certifications";
import { Cta } from "@/components/Cta";
import { NewsletterForm } from "@/components/forms";
import { HERO_IMG, HOME_CARDS, NEWSLETTER_TOPICS, TESTIMONIALS, YT_EMBED } from "@/lib/content";

const STATS = [
  { n: "40+", l: "Years in business" },
  { n: "#1", l: "Selected lab in Texas" },
  { n: "20–30", l: "CE programs / year" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage src={HERO_IMG} alt="Dental practice hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/92 via-deep-navy/75 to-deep-navy/40" />
        </div>
        <div className="relative max-w-container mx-auto px-gutter py-24 w-full">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-clinical-blue mb-5">The #1 Selected Dental Lab in Texas</p>
            <h1 className="font-head font-extrabold text-white text-[44px] md:text-[58px] leading-[1.03] tracking-tight mb-6">Where technology and artistry come together.</h1>
            <p className="text-[19px] leading-relaxed text-surface-container-highest/90 mb-9 max-w-xl">A family owned &amp; operated full-service laboratory delivering reliable restorations with superior esthetics &mdash; built on relationships, education, and consistency since 1984.</p>
            <div className="flex flex-wrap gap-4">
              <ButtonPrimary href="/contact" icon="inventory_2">Request a Lab Kit</ButtonPrimary>
              <ButtonGhost href="/restorations" dark>Explore Restorations</ButtonGhost>
            </div>
          </div>
        </div>
      </section>

      {/* Core competencies */}
      <section className="max-w-container mx-auto px-gutter py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Our Core Competencies</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[34px] tracking-tight mb-4">Precision, reliability, and partnership</h2>
          <p className="text-[17px] text-on-surface-variant">Combining advanced CAD/CAM technology with decades of masterful artistry to deliver precise solutions your practice can rely on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {HOME_CARDS.map((c) => (
            <Link key={c.title} href={c.href} className="group bg-surface-container-lowest rounded border border-outline-variant/60 overflow-hidden shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1 block">
              <div className="h-52 overflow-hidden relative">
                <SmartImage src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-white font-head font-bold text-[22px]">{c.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-[15px] leading-relaxed text-on-surface-variant mb-4">{c.desc}</p>
                <span className="text-clinical-blue font-bold text-[14px] inline-flex items-center gap-1 group-hover:gap-2 transition-all">{c.cta}<Icon name="arrow_forward" className="text-[18px]" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome + video */}
      <section className="bg-surface-container-lowest border-y border-outline-variant/50">
        <div className="max-w-container mx-auto px-gutter py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>Welcome to Authentic Beauty</Eyebrow>
            <h2 className="font-head font-bold text-deep-navy text-[32px] leading-tight tracking-tight mb-5">A family lab founded on a simple set of principles.</h2>
            <p className="text-[16px] leading-relaxed text-on-surface-variant mb-4">Authentic Dental Laboratory, Inc. was founded in 1984 on the belief that a laboratory succeeds by building relationships through education, excelling in customer service, and providing a consistent product with every case.</p>
            <p className="text-[16px] leading-relaxed text-on-surface-variant mb-7">For over 40 years we have held to this &mdash; continually grading ourselves through customer feedback and a willingness to evolve our systems. Our goal is to become your dental resource.</p>
            <div className="flex flex-wrap gap-8">
              {STATS.map((s) => (
                <div key={s.l}><div className="font-head font-extrabold text-clinical-blue text-[34px] leading-none">{s.n}</div><div className="text-[13px] text-on-surface-variant mt-1">{s.l}</div></div>
              ))}
            </div>
          </div>
          <div className="relative rounded overflow-hidden shadow-card aspect-video bg-deep-navy">
            <iframe className="w-full h-full" src={YT_EMBED} title="Authentic Dental Laboratory" allowFullScreen />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-deep-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "22px 22px" }} />
        <div className="relative max-w-container mx-auto px-gutter py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="flex items-center gap-2 mb-3"><Icon name="award_star" className="text-premium-gold" fill /><span className="text-[13px] font-bold tracking-[0.16em] uppercase text-premium-gold">Award Winning</span></div>
            <h2 className="font-head font-bold text-white text-[32px] leading-tight tracking-tight mb-4">Clinical Guidelines Newsletter<br /><span className="text-clinical-blue italic font-semibold">From the Bench</span></h2>
            <p className="text-[16px] leading-relaxed text-surface-container-highest/80 mb-6">Sign up to receive our clinical guidelines newsletter. A few of the topics we cover:</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[14px] text-surface-container-highest/85">
              {NEWSLETTER_TOPICS.map((t) => <li key={t} className="flex items-start gap-2"><Icon name="check_circle" className="text-[18px] text-clinical-blue mt-0.5" />{t}</li>)}
            </ul>
          </div>
          <div className="bg-white/5 ring-1 ring-white/10 rounded p-8 backdrop-blur">
            <h3 className="font-head font-bold text-white text-[20px] mb-1">Sign up for the newsletter</h3>
            <p className="text-[13px] text-surface-container-highest/70 mb-6">Please include your office information to prevent incoming spam.</p>
            <NewsletterForm fields={["Your Name", "Practice Name", "Street, City, State, Zip", "Phone", "Email"]} withLabels />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-container mx-auto px-gutter py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow>What Doctors Say</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[32px] tracking-tight">Trusted by practices across Texas &amp; beyond</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-surface-container-lowest rounded border border-outline-variant/60 p-7 shadow-card flex flex-col">
              <Icon name="format_quote" className="text-[40px] text-clinical-blue/30 leading-none mb-2" fill />
              <blockquote className="text-[16px] leading-relaxed text-on-surface flex-1">{t.quote}</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-outline-variant/60"><div className="font-head font-bold text-deep-navy text-[15px]">{t.name}</div><div className="text-[13px] text-on-surface-variant">{t.role}</div></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Certifications />
      <Cta />
    </>
  );
}
