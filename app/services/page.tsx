import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Eyebrow, ButtonPrimary, ButtonGhost } from "@/components/ui";
import { PageBanner } from "@/components/PageBanner";
import { Cta } from "@/components/Cta";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = { title: "Services | Authentic Dental Laboratory" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" crumb="What We Offer" />
      <section className="max-w-container mx-auto px-gutter py-16">
        <div className="max-w-3xl mb-12">
          <Eyebrow>Operatory Products &amp; Support</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[32px] leading-tight tracking-tight mb-4">Your dental resource, end to end.</h2>
          <p className="text-[17px] leading-relaxed text-on-surface-variant">Our goal is to be dedicated to your practice by becoming your dental resource &mdash; providing guidance and knowledge on the latest techniques, materials, case planning, and procedures available today.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-surface-container-lowest rounded border border-outline-variant/60 p-7 shadow-card hover:shadow-float transition-shadow duration-300">
              <span className="grid place-items-center w-12 h-12 rounded bg-clinical-blue/10 mb-4"><Icon name={s.icon} className="text-clinical-blue" /></span>
              <h3 className="font-head font-bold text-deep-navy text-[18px] mb-2">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-deep-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "22px 22px" }} />
        <div className="relative max-w-container mx-auto px-gutter py-16 grid md:grid-cols-2 gap-10 items-center">
          <div><h2 className="font-head font-bold text-white text-[30px] leading-tight tracking-tight mb-3">Accepting STL files from all intraoral scanners.</h2><p className="text-[16px] text-surface-container-highest/80">Go fully digital with Authentic. Connect your scanner to our lab and streamline your restorative workflow.</p></div>
          <div className="flex md:justify-end flex-wrap gap-3">
            <ButtonPrimary href="/send-a-case" icon="send">Send a Case</ButtonPrimary>
            <ButtonGhost href="/contact" icon="call" dark>Contact Our Team</ButtonGhost>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
