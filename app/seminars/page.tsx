import type { Metadata } from "next";
import { SmartImage } from "@/components/SmartImage";
import { Icon } from "@/components/Icon";
import { Eyebrow, ButtonPrimary, ButtonGhost } from "@/components/ui";
import { PageBanner } from "@/components/PageBanner";
import { Cta } from "@/components/Cta";
import { SEMINAR_IMG, SEMINAR_TOPICS } from "@/lib/content";

export const metadata: Metadata = { title: "Seminars | Authentic Dental Laboratory" };

const WHY = [
  { title: "Live, hands-on", icon: "groups", desc: "Small-group, practical sessions with real cases and direct lecturer access." },
  { title: "Nationally recognized", icon: "verified", desc: "Featured in Dentistry Today with respected lecturers from across the country." },
  { title: "CE credit", icon: "workspace_premium", desc: "AGD PACE approved — earn continuing education credit for you and your team." },
];

export default function SeminarsPage() {
  return (
    <>
      <PageBanner title="Seminars" crumb="Continuing Education" />
      <section className="max-w-container mx-auto px-gutter py-16 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Eyebrow>AGD PACE Approved Provider</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[32px] leading-tight tracking-tight mb-5">20&ndash;30 CE programs every year, featured in Dentistry Today.</h2>
          <p className="text-[16px] leading-relaxed text-on-surface-variant mb-4">Authentic hosts continuing education programs with many of the most respected and popular lecturers in the country &mdash; including our President, Robert P. Marbach, BA, CDT, who has lectured internationally for many years with approval from the Academy of General Dentistry.</p>
          <p className="text-[16px] leading-relaxed text-on-surface-variant mb-7">Our courses keep your team current on the latest materials, digital workflows, and restorative techniques.</p>
          <div className="flex flex-wrap gap-3">
            <ButtonPrimary href="/contact" icon="calendar_month">Request the CE Calendar</ButtonPrimary>
            <ButtonGhost href="/videos-newsletters" icon="smart_display">Watch Past Seminars</ButtonGhost>
          </div>
        </div>
        <div className="lg:col-span-6 rounded overflow-hidden shadow-card border border-outline-variant/60"><SmartImage src={SEMINAR_IMG} alt="Seminar lecture" className="w-full h-full object-cover" /></div>
      </section>
      <section className="bg-surface-container-lowest border-y border-outline-variant/50">
        <div className="max-w-container mx-auto px-gutter py-16">
          <div className="text-center max-w-2xl mx-auto mb-10"><Eyebrow>Curriculum</Eyebrow><h2 className="font-head font-bold text-deep-navy text-[30px] tracking-tight">Topics we cover</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEMINAR_TOPICS.map((t) => <div key={t} className="flex items-start gap-3 bg-surface-gray rounded border border-outline-variant/60 p-5"><Icon name="menu_book" className="text-clinical-blue mt-0.5" /><span className="text-[15px] font-semibold text-deep-navy leading-snug">{t}</span></div>)}
          </div>
        </div>
      </section>
      <section className="max-w-container mx-auto px-gutter py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {WHY.map((w) => <div key={w.title} className="bg-surface-container-lowest rounded border border-outline-variant/60 p-7 shadow-card"><span className="grid place-items-center w-12 h-12 rounded bg-clinical-blue/10 mb-4"><Icon name={w.icon} className="text-clinical-blue" /></span><h3 className="font-head font-bold text-deep-navy text-[18px] mb-2">{w.title}</h3><p className="text-[15px] leading-relaxed text-on-surface-variant">{w.desc}</p></div>)}
        </div>
      </section>
      <Cta />
    </>
  );
}
