import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Eyebrow } from "@/components/ui";
import { PageBanner } from "@/components/PageBanner";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = { title: "Send a Case | Authentic Dental Laboratory" };

const STEPS = [
  { n: "1", title: "Print your Rx", icon: "description", desc: "Download and complete our prescription form for your case." },
  { n: "2", title: "Package the case", icon: "inventory_2", desc: "Securely package your impression or model with the Rx enclosed." },
  { n: "3", title: "Create a UPS label", icon: "local_shipping", desc: "Generate a prepaid UPS shipping label right from our site." },
  { n: "4", title: "Ship to us", icon: "send", desc: "Drop off with UPS — or schedule a local pickup in San Antonio." },
];
const ACTIONS = [
  { label: "Print Rx Form", icon: "description" },
  { label: "Create UPS Shipping Label", icon: "local_shipping" },
  { label: "Request a Lab Kit", icon: "inventory_2" },
];

export default function SendACasePage() {
  return (
    <>
      <PageBanner title="Send a Case" crumb="Get Started" />
      <section className="max-w-container mx-auto px-gutter py-16">
        <div className="max-w-3xl mb-12">
          <Eyebrow>Four Simple Steps</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[32px] leading-tight tracking-tight mb-4">Sending a case to Authentic is easy.</h2>
          <p className="text-[17px] leading-relaxed text-on-surface-variant">Whether you&apos;re shipping a physical impression or sending a digital scan, we make it simple to get your case to our bench.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {STEPS.map((s) => (
            <div key={s.n} className="relative bg-surface-container-lowest rounded border border-outline-variant/60 p-6 shadow-card">
              <span className="absolute top-5 right-5 font-head font-extrabold text-[40px] leading-none text-clinical-blue/15">{s.n}</span>
              <span className="grid place-items-center w-12 h-12 rounded bg-clinical-blue/10 mb-4"><Icon name={s.icon} className="text-clinical-blue" /></span>
              <h3 className="font-head font-bold text-deep-navy text-[18px] mb-2">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {ACTIONS.map((a) => (
            <a key={a.label} href="#" className="flex items-center justify-center gap-2 bg-clinical-blue text-white px-6 py-4 rounded text-[15px] font-bold hover:bg-primary transition-colors shadow-float"><Icon name={a.icon} />{a.label}</a>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
