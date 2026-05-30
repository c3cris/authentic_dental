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
        <div className="max-w-2xl mb-10">
          <Eyebrow>Operatory Products &amp; Support</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[32px] leading-tight tracking-tight mb-4">Your dental resource, end to end.</h2>
          <p className="text-[17px] leading-relaxed text-on-surface-variant">Our goal is to be dedicated to your practice by becoming your dental resource &mdash; providing guidance and knowledge on the latest techniques, materials, case planning, and procedures available today.</p>
        </div>
        <div className="divide-y divide-outline-variant/50">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex gap-5 py-6">
              <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-clinical-blue/10 mt-0.5">
                <Icon name={s.icon} className="text-clinical-blue text-[20px]" />
              </span>
              <div>
                <h3 className="font-head font-bold text-deep-navy text-[17px] mb-1">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-on-surface-variant">{s.desc}</p>
              </div>
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
