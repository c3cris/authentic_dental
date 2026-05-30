import Link from "next/link";
import { Icon } from "./Icon";
import { CONTACT } from "@/lib/nav";

export function TopBar() {
  return (
    <div className="bg-deep-navy text-surface-bright/90 hidden md:block">
      <div className="max-w-container mx-auto px-gutter h-10 flex justify-between items-center text-[12px] tracking-wide">
        <span className="flex items-center gap-2">
          <Icon name="workspace_premium" className="text-[16px] text-premium-gold" fill /> Family Owned &amp; Operated since 1984
        </span>
        <div className="flex items-center gap-7">
          <a href={`tel:${CONTACT.phoneToll.replace(/-/g, "")}`} className="flex items-center gap-2 hover:text-clinical-blue transition-colors">
            <Icon name="call" className="text-[16px]" /> {CONTACT.phoneToll}
          </a>
          <Link href="/contact" className="flex items-center gap-2 hover:text-clinical-blue transition-colors">
            <Icon name="location_on" className="text-[16px]" /> {CONTACT.address1}, San Antonio, TX 78228
          </Link>
        </div>
      </div>
    </div>
  );
}
