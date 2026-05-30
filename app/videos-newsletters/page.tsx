"use client";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { Eyebrow } from "@/components/ui";
import { PageBanner } from "@/components/PageBanner";
import { Cta } from "@/components/Cta";
import { NewsletterForm } from "@/components/forms";
import { NEWSLETTER_ARCHIVE } from "@/lib/content";

const VIDEOS = [
  { title: "Dentist Testimonial on Authentic Dental Lab", id: "-_uoTDFNeJA" },
  { title: "How to Make a Flipper", id: "f1302b2OIDw" },
  { title: "How to take the perfect shade", id: "PkuoSEPDy5c" },
];

export default function VideosNewslettersPage() {
  const [active, setActive] = useState(() => VIDEOS[Math.floor(Math.random() * VIDEOS.length)]);
  const [playing, setPlaying] = useState(false);

  function selectVideo(v: typeof VIDEOS[number]) {
    setActive(v);
    setPlaying(false);
  }

  return (
    <>
      <PageBanner title="Videos &amp; Newsletters" crumb="Learn With Us" />
      <section className="max-w-container mx-auto px-gutter py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <Eyebrow>Featured Video</Eyebrow>
            <h2 className="font-head font-bold text-deep-navy text-[28px] tracking-tight mb-5">{active.title}</h2>
            <div className="rounded overflow-hidden shadow-card aspect-video bg-deep-navy relative">
              {playing ? (
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${active.id}?rel=0&autoplay=1`} title={active.title} allowFullScreen allow="autoplay; encrypted-media" />
              ) : (
                <button onClick={() => setPlaying(true)} className="w-full h-full block relative group">
                  <img src={`https://img.youtube.com/vi/${active.id}/maxresdefault.jpg`} alt={active.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors">
                      <Icon name="play_arrow" className="text-[36px] text-deep-navy ml-1" fill />
                    </div>
                  </div>
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {VIDEOS.map((v) => (
                <button key={v.id} onClick={() => selectVideo(v)} className="group block text-left">
                  <div className={`aspect-video rounded border relative overflow-hidden ${active.id === v.id ? "ring-2 ring-clinical-blue border-clinical-blue" : "bg-surface-container border-outline-variant/60"}`}>
                    <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 grid place-items-center bg-black/20 group-hover:bg-black/10 transition-colors"><Icon name="play_circle" className="text-[34px] text-white drop-shadow" fill /></div>
                  </div>
                  <div className="text-[13px] font-semibold text-deep-navy mt-2 leading-snug">{v.title}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-deep-navy rounded p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "22px 22px" }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3"><Icon name="award_star" className="text-premium-gold" fill /><span className="text-[13px] font-bold tracking-[0.16em] uppercase text-premium-gold">Award Winning</span></div>
                <h3 className="font-head font-bold text-white text-[22px] mb-1">Newsletter: <span className="text-clinical-blue italic">From the Bench</span></h3>
                <p className="text-[14px] text-surface-container-highest/75 mb-5">Clinical guidelines, delivered to your practice.</p>
                <NewsletterForm fields={["Your Name", "Practice Name", "Email"]} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface-gray border-y border-outline-variant/50">
        <div className="max-w-container mx-auto px-gutter py-16">
          <div className="text-center max-w-2xl mx-auto mb-10"><Eyebrow>From the Bench Archive</Eyebrow><h2 className="font-head font-bold text-deep-navy text-[30px] tracking-tight">Clinical topics we discuss</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {NEWSLETTER_ARCHIVE.map((t) => <div key={t} className="flex items-start gap-2 text-[15px] text-on-surface"><Icon name="article" className="text-[18px] text-clinical-blue mt-0.5" />{t}</div>)}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
