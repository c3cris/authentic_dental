export function PageBanner({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative bg-deep-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)", backgroundSize: "22px 22px" }} />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-clinical-blue/20 blur-3xl" />
      <div className="relative max-w-container mx-auto px-gutter py-16 md:py-20">
        <p className="text-[13px] font-bold tracking-[0.18em] uppercase text-clinical-blue mb-3">{crumb}</p>
        <h1 className="font-head font-extrabold text-white text-[40px] md:text-[52px] leading-[1.05] tracking-tight">{title}</h1>
      </div>
    </section>
  );
}
