"use client";
import { useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function resolvedSrc(src: string) {
  return src.startsWith('/') ? `${BASE}${src}` : src;
}

export function SmartImage({ src, alt, className = "", style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} grid place-items-center bg-surface-container`} style={style}>
        <div className="text-center px-3">
          <span className="material-symbols-outlined text-[32px] text-outline">image</span>
          <div className="font-mono text-[11px] mt-1 text-outline">{alt}</div>
        </div>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={resolvedSrc(src)} alt={alt} loading="lazy" className={className} style={style} onError={() => setFailed(true)} />;
}
