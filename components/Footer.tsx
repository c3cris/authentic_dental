import Link from "next/link";
import { Icon } from "./Icon";
import { NAV, CONTACT } from "@/lib/nav";

const SOCIAL = ["thumb_up", "alternate_email", "smart_display", "photo_camera"];
const GET_STARTED = [
  { label: "Send a Case", href: "/send-a-case" },
  { label: "Request Fee Schedule", href: "/contact" },
  { label: "Request a Lab Kit", href: "/contact" },
  { label: "Create UPS Label", href: "/contact" },
  { label: "Careers", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-deep-navy text-surface-container-highest">
      <div className="max-w-container mx-auto px-gutter py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="grid place-items-center w-11 h-11 rounded bg-white/5 ring-1 ring-white/10"><Icon name="dentistry" className="text-clinical-blue" fill /></span>
            <span className="leading-none">
              <span className="block font-head font-extrabold text-white text-[18px] tracking-tight">AUTHENTIC</span>
              <span className="block text-[10px] font-bold tracking-[0.28em] text-clinical-blue uppercase">Dental Laboratory</span>
            </span>
          </div>
          <p className="text-[15px] leading-relaxed text-surface-container-highest/80 max-w-xs">Precision technology. Masterful artistry. The #1 selected dental lab in Texas for technology, quality, and service.</p>
          <div className="flex items-center gap-3 mt-6">
            {SOCIAL.map((i) => (
              <a key={i} href="#" className="grid place-items-center w-9 h-9 rounded bg-white/5 ring-1 ring-white/10 hover:bg-clinical-blue transition-colors"><Icon name={i} className="text-[18px]" /></a>
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          <h5 className="text-[13px] font-bold tracking-[0.12em] uppercase text-white mb-4">Visit / Call</h5>
          <ul className="space-y-3 text-[15px] text-surface-container-highest/85">
            <li className="flex items-start gap-2"><Icon name="location_on" className="text-[20px] text-clinical-blue" /><span>{CONTACT.address1}<br />{CONTACT.address2}</span></li>
            <li className="flex items-center gap-2"><Icon name="call" className="text-[20px] text-clinical-blue" /><span>Toll Free {CONTACT.phoneToll}</span></li>
            <li className="flex items-center gap-2"><Icon name="print" className="text-[20px] text-clinical-blue" /><span>Local {CONTACT.phoneLocal}</span></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="text-[13px] font-bold tracking-[0.12em] uppercase text-white mb-4">Explore</h5>
          <ul className="space-y-2.5 text-[15px] text-surface-container-highest/85">
            {NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-clinical-blue transition-colors">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h5 className="text-[13px] font-bold tracking-[0.12em] uppercase text-white mb-4">Get Started</h5>
          <ul className="space-y-2.5 text-[15px] text-surface-container-highest/85">
            {GET_STARTED.map((g, i) => <li key={i}><Link href={g.href} className="hover:text-clinical-blue transition-colors">{g.label}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-gutter py-5 flex flex-col sm:flex-row gap-2 justify-between items-center text-[12px] text-surface-container-highest/60">
          <span>© 2026 Authentic Dental Laboratory, Inc. Family Owned &amp; Operated.</span>
          <span className="flex items-center gap-2"><Icon name="verified" className="text-[15px] text-premium-gold" fill /> 100% Made in the USA</span>
        </div>
      </div>
    </footer>
  );
}
