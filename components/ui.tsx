import Link from "next/link";
import { Icon } from "./Icon";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] font-bold tracking-[0.18em] uppercase text-clinical-blue mb-3">{children}</p>;
}

export function ButtonPrimary({ children, href, icon = "arrow_forward", className = "" }: { children: React.ReactNode; href: string; icon?: string; className?: string }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 bg-clinical-blue text-white px-7 py-3.5 rounded text-[14px] font-bold tracking-wide hover:bg-primary transition-colors shadow-float ${className}`}>
      {children}
      <Icon name={icon} className="text-[18px]" />
    </Link>
  );
}

export function ButtonGhost({ children, href, icon = "arrow_forward", dark = false }: { children: React.ReactNode; href: string; icon?: string; dark?: boolean }) {
  const tone = dark
    ? "border-white/40 text-white hover:text-white hover:border-clinical-blue"
    : "border-deep-navy/25 text-deep-navy hover:border-clinical-blue hover:text-clinical-blue";
  return (
    <Link href={href} className={`inline-flex items-center gap-2 border ${tone} px-7 py-3.5 rounded text-[14px] font-bold tracking-wide transition-colors`}>
      {children}
      <Icon name={icon} className="text-[18px]" />
    </Link>
  );
}
