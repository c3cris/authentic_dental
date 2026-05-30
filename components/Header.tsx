"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";
import { NAV, CONTACT } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function Logo({ onWhite = false }: { onWhite?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <span className="grid place-items-center w-11 h-11 rounded bg-deep-navy">
        <Icon name="dentistry" className="text-clinical-blue" fill />
      </span>
      <span className="leading-none">
        <span className={`block font-head font-extrabold text-[19px] tracking-tight ${onWhite ? "text-white" : "text-deep-navy"}`}>AUTHENTIC</span>
        <span className="block text-[10px] font-bold tracking-[0.28em] text-on-surface-variant uppercase">Dental Laboratory</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-surface-container-lowest/95 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.06)] sticky top-0 z-50">
      <div className="max-w-container mx-auto px-gutter h-[76px] flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            const on = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={`${on ? "text-clinical-blue" : "text-on-surface-variant hover:text-clinical-blue"} relative text-[14px] font-bold tracking-wide transition-colors py-1`}>
                {item.label}
                {on && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-clinical-blue rounded-full" />}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a href={`tel:${CONTACT.phoneToll.replace(/-/g, "")}`} className="hidden xl:block text-[14px] font-bold text-deep-navy">{CONTACT.phoneToll}</a>
          <Link href="/send-a-case" className="bg-clinical-blue text-white px-5 py-2.5 rounded text-[13px] font-bold tracking-wide hover:bg-primary transition-colors shadow-sm hover:-translate-y-0.5 duration-150 flex items-center gap-2">
            <Icon name="send" className="text-[18px]" /> Send a Case
          </Link>
        </div>
        <button className="lg:hidden text-deep-navy" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <Icon name={open ? "close" : "menu"} className="text-[28px]" />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-outline-variant/60 bg-surface-container-lowest">
          <div className="max-w-container mx-auto px-gutter py-3 flex flex-col">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                className={`py-2.5 text-[15px] font-bold ${isActive(pathname, item.href) ? "text-clinical-blue" : "text-deep-navy"}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/send-a-case" onClick={() => setOpen(false)} className="mt-2 mb-1 bg-clinical-blue text-white px-5 py-3 rounded text-[14px] font-bold text-center">Send a Case</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
