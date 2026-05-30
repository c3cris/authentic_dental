import type { Metadata } from "next";
import { SmartImage } from "@/components/SmartImage";
import { Icon } from "@/components/Icon";
import { Eyebrow } from "@/components/ui";
import { PageBanner } from "@/components/PageBanner";
import { Certifications } from "@/components/Certifications";
import { Cta } from "@/components/Cta";
import { PRESIDENT_IMG, EXPERTISE, ABOUT_CARDS } from "@/lib/content";

export const metadata: Metadata = { title: "About Us | Authentic Dental Laboratory" };

const VM = [
  { title: "Vision Statement", icon: "visibility", desc: "The #1 selected dental lab in Texas for Technology, Quality, and Service." },
  { title: "Mission Statement", icon: "flag", desc: "To empower all employees to take ownership in the business through education and today's technologies — expediting tasks and communication, resulting in increased customer satisfaction and steady growth." },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumb="Who We Are" />
      <section className="max-w-container mx-auto px-gutter py-20 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="rounded overflow-hidden shadow-card border border-outline-variant/60"><SmartImage src={PRESIDENT_IMG} alt="Robert P. Marbach, President" className="w-full h-auto object-cover" /></div>
          <div className="mt-5 bg-surface-container-lowest rounded border border-outline-variant/60 p-6 shadow-card">
            <h3 className="font-head font-bold text-deep-navy text-[20px]">Robert P. Marbach, BA, C.D.T.</h3>
            <p className="text-clinical-blue font-bold text-[13px] tracking-wide uppercase mb-3">President &amp; Founder</p>
            <p className="text-[15px] leading-relaxed text-on-surface-variant">Founder of Authentic Dental Lab, past Board of Directors at The Pankey Institute, and a Board Certified Dental Technician with over 40 years of experience. Recipient of the NADL Inventor&apos;s Award for the patented &ldquo;Shade Wand,&rdquo; and recently inducted into the American Society for Advanced Dental Esthetics.</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Eyebrow>A Letter from Our President</Eyebrow>
          <h2 className="font-head font-bold text-deep-navy text-[30px] leading-tight tracking-tight mb-6">Over 40 years of family-owned craftsmanship.</h2>
          <div className="space-y-4 text-[16px] leading-relaxed text-on-surface-variant italic">
            <p>&ldquo;Authentic Dental Lab is a family owned and operated laboratory for over 40 years and we are very proud of our history. Nobody beats our customer service and nobody beats our quality.&rdquo;</p>
            <p>&ldquo;Since 1984, our reputation for excellence has combined the latest dental technology with the expertise of our highly trained technicians.&rdquo;</p>
            <p>&ldquo;We know that you cannot cut corners in providing top esthetic, quality restorations. We continuously strive for excellence by working closely with our customers to achieve a long-lasting partnership. As always, I want to personally guarantee your satisfaction.&rdquo;</p>
          </div>
          <div className="mt-8">
            <h4 className="text-[13px] font-bold tracking-[0.16em] uppercase text-deep-navy mb-4">Our Expertise &amp; Affiliations</h4>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px] text-on-surface-variant">
              {EXPERTISE.map((t) => <div key={t} className="flex items-start gap-2"><Icon name="verified" className="text-[18px] text-clinical-blue mt-0.5" />{t}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest border-y border-outline-variant/50">
        <div className="max-w-container mx-auto px-gutter py-16 grid md:grid-cols-2 gap-6">
          {VM.map((v) => (
            <div key={v.title} className="bg-surface-gray rounded border border-outline-variant/60 p-8">
              <span className="grid place-items-center w-12 h-12 rounded bg-clinical-blue/10 mb-4"><Icon name={v.icon} className="text-clinical-blue" /></span>
              <h3 className="font-head font-bold text-deep-navy text-[20px] mb-2">{v.title}</h3>
              <p className="text-[16px] leading-relaxed text-on-surface-variant">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-gutter py-20">
        <div className="grid md:grid-cols-3 gap-7">
          {ABOUT_CARDS.map((c) => (
            <div key={c.title} className="bg-surface-container-lowest rounded border border-outline-variant/60 overflow-hidden shadow-card">
              <div className="h-44 overflow-hidden"><SmartImage src={c.img} alt={c.title} className="w-full h-full object-cover" /></div>
              <div className="p-6"><h3 className="font-head font-bold text-deep-navy text-[19px] mb-2">{c.title}</h3><p className="text-[15px] leading-relaxed text-on-surface-variant">{c.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <Certifications />
      <Cta />
    </>
  );
}
