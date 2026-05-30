import { ButtonPrimary, ButtonGhost } from "./ui";
import { Icon } from "./Icon";

export function Cta() {
  return (
    <section className="bg-surface-container-lowest border-t border-outline-variant/60">
      <div className="max-w-container mx-auto px-gutter py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3"><Icon name="verified" className="text-premium-gold" fill /><span className="text-[13px] font-bold tracking-[0.16em] uppercase text-deep-navy">100% Made in the USA</span></div>
          <h2 className="font-head font-bold text-deep-navy text-[30px] md:text-[34px] leading-tight tracking-tight mb-2">Ready to partner with precision?</h2>
          <p className="text-[16px] text-on-surface-variant">Experience the difference that masterful artistry and dedicated service makes for your patients.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonPrimary href="/send-a-case" icon="send">Send a Case</ButtonPrimary>
          <ButtonGhost href="/contact" icon="inventory_2">Request a Lab Kit</ButtonGhost>
        </div>
      </div>
    </section>
  );
}
