import { SmartImage } from "./SmartImage";
import { Eyebrow } from "./ui";
import { CERTS } from "@/lib/content";

export function Certifications() {
  return (
    <section className="bg-surface-gray border-y border-outline-variant/50">
      <div className="max-w-container mx-auto px-gutter py-14">
        <div className="text-center mb-9">
          <Eyebrow>Trusted &amp; Accredited</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[28px] tracking-tight">Our Certifications</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CERTS.map((c) => (
            <div key={c.label} className="bg-white rounded border border-outline-variant/60 grid place-items-center p-5 h-28 shadow-card">
              <SmartImage src={c.src} alt={c.label} className="max-h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
