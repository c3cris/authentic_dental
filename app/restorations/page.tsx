import type { Metadata } from "next";
import { SmartImage } from "@/components/SmartImage";
import { Icon } from "@/components/Icon";
import { PageBanner } from "@/components/PageBanner";
import { Cta } from "@/components/Cta";
import { REST_GROUPS, ORTHO } from "@/lib/content";

export const metadata: Metadata = { title: "Restorations | Authentic Dental Laboratory" };

export default function RestorationsPage() {
  return (
    <>
      <PageBanner title="Restorations" crumb="Restorative Options" />
      <section className="max-w-container mx-auto px-gutter py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <p className="text-[18px] leading-relaxed text-on-surface-variant">Authentic Dental Laboratory is proud to be a family owned &amp; operated full-service dental laboratory. Our lab features some of the most current, technically advanced products that deliver reliable restorations with superior esthetics at competitive prices.</p>
          </div>
          <div className="bg-clinical-blue/10 border border-clinical-blue/30 rounded p-6">
            <Icon name="precision_manufacturing" className="text-clinical-blue text-[28px] mb-2" />
            <p className="text-[15px] font-semibold text-deep-navy leading-relaxed">Authentic Lab owns and operates the most advanced CAD/CAM milling center in Texas. Call us for your milling and digital scan needs.</p>
          </div>
        </div>
      </section>

      {REST_GROUPS.map((g) => (
        <section key={g.group} className="max-w-container mx-auto px-gutter pb-6">
          <div className="flex items-center gap-4 mb-7"><h2 className="font-head font-bold text-deep-navy text-[24px] tracking-tight whitespace-nowrap">{g.group}</h2><span className="h-px bg-outline-variant flex-1" /></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {g.items.map((it) => (
              <div key={it.name} className="group bg-surface-container-lowest rounded border border-outline-variant/60 overflow-hidden shadow-card hover:shadow-float transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-surface-container"><SmartImage src={it.img} alt={it.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-4"><h3 className="font-head font-bold text-deep-navy text-[15px] mb-1">{it.name}</h3><p className="text-[13px] leading-snug text-on-surface-variant">{it.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="bg-surface-gray border-y border-outline-variant/50">
        <div className="max-w-container mx-auto px-gutter py-14">
          <div className="flex items-center gap-4 mb-7"><h2 className="font-head font-bold text-deep-navy text-[24px] tracking-tight">Orthodontic Appliances</h2><span className="h-px bg-outline-variant flex-1" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {ORTHO.map((o) => (
              <div key={o.title} className="bg-white rounded border border-outline-variant/60 overflow-hidden shadow-card">
                <div className="aspect-[4/3] overflow-hidden"><SmartImage src={o.img} alt={o.title} className="w-full h-full object-cover" /></div>
                <div className="p-4 font-head font-bold text-deep-navy text-[15px]">{o.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
