"use client";

// Presentational forms. Marked "use client" so onSubmit handlers are allowed
// (Server Components cannot receive event-handler props).

export function NewsletterForm({
  fields,
  withLabels = false,
}: {
  fields: string[];
  withLabels?: boolean;
}) {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      {fields.map((l) =>
        withLabels ? (
          <div key={l}>
            <label className="block text-[12px] font-bold tracking-wide uppercase text-surface-container-highest/70 mb-1.5">{l}</label>
            <input type="text" placeholder={l} className="w-full rounded bg-white/10 border-white/15 text-white placeholder-white/40 focus:border-clinical-blue focus:ring-clinical-blue text-[15px]" />
          </div>
        ) : (
          <input key={l} type="text" placeholder={l} className="w-full rounded bg-white/10 border-white/15 text-white placeholder-white/40 focus:border-clinical-blue focus:ring-clinical-blue text-[15px]" />
        )
      )}
      <button type="submit" className="w-full bg-clinical-blue text-white font-bold text-[14px] tracking-wide py-3.5 rounded hover:bg-primary transition-colors">Sign Up</button>
    </form>
  );
}

export function ContactForm() {
  const fields = ["Your Name", "Practice Name", "Email", "Phone"];
  return (
    <form className="grid sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
      {fields.map((l) => (
        <div key={l}>
          <label className="block text-[12px] font-bold tracking-wide uppercase text-on-surface-variant mb-1.5">{l}</label>
          <input type="text" placeholder={l} className="w-full rounded border-outline-variant focus:border-clinical-blue focus:ring-clinical-blue text-[15px]" />
        </div>
      ))}
      <div className="sm:col-span-2">
        <label className="block text-[12px] font-bold tracking-wide uppercase text-on-surface-variant mb-1.5">Message</label>
        <textarea rows={5} placeholder="How can we help your practice?" className="w-full rounded border-outline-variant focus:border-clinical-blue focus:ring-clinical-blue text-[15px]" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="inline-flex items-center gap-2 bg-clinical-blue text-white px-7 py-3.5 rounded text-[14px] font-bold tracking-wide hover:bg-primary transition-colors shadow-float">
          Send Message
          <span className="material-symbols-outlined text-[18px]" aria-hidden>send</span>
        </button>
      </div>
    </form>
  );
}
