import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Eyebrow } from "@/components/ui";
import { PageBanner } from "@/components/PageBanner";
import { ContactForm } from "@/components/forms";
import { MAP_EMBED } from "@/lib/content";

export const metadata: Metadata = { title: "Contact | Authentic Dental Laboratory" };

const INFO = [
  { icon: "location_on", label: "Address", value: "1950 Bandera Rd., San Antonio, Texas 78228" },
  { icon: "call", label: "Toll Free", value: "800-683-1025" },
  { icon: "print", label: "Local Phone", value: "210-735-1433" },
  { icon: "schedule", label: "Hours", value: "Monday – Friday, 8:00am – 5:00pm CT" },
];
const QUICK = [
  { label: "Send a Case", icon: "send", href: "/send-a-case" },
  { label: "Request Fee Schedule", icon: "request_quote", href: "/contact" },
  { label: "Request a Lab Kit", icon: "inventory_2", href: "/contact" },
  { label: "Careers", icon: "work", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumb="Get In Touch" />
      <section className="max-w-container mx-auto px-gutter py-16 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Eyebrow>Visit or Call</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[30px] leading-tight tracking-tight mb-6">We&apos;d love to hear from your practice.</h2>
          <ul className="space-y-5 mb-8">
            {INFO.map((i) => (
              <li key={i.label} className="flex items-start gap-4">
                <span className="grid place-items-center w-11 h-11 rounded bg-clinical-blue/10 shrink-0"><Icon name={i.icon} className="text-clinical-blue" /></span>
                <div><div className="text-[12px] font-bold tracking-[0.14em] uppercase text-on-surface-variant">{i.label}</div><div className="text-[17px] font-semibold text-deep-navy">{i.value}</div></div>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3">
            {QUICK.map((q) => (
              <Link key={q.label} href={q.href} className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/60 rounded px-4 py-3 text-[14px] font-bold text-deep-navy hover:border-clinical-blue hover:text-clinical-blue transition-colors shadow-card">
                <Icon name={q.icon} className="text-[20px] text-clinical-blue" />{q.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest rounded border border-outline-variant/60 p-8 shadow-card">
            <h3 className="font-head font-bold text-deep-navy text-[22px] mb-6">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="max-w-container mx-auto px-gutter pb-20">
        <div className="rounded overflow-hidden border border-outline-variant/60 shadow-card">
          <iframe className="w-full h-[420px]" loading="lazy" src={MAP_EMBED} title="Authentic Dental Laboratory location" />
        </div>
      </section>
    </>
  );
}
