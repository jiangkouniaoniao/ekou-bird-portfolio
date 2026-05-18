"use client";

import { useState } from "react";

type ArtworkImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

const palettes = [
  "from-bluegray via-paper to-orange",
  "from-orange via-paper to-cyan",
  "from-acid via-paper to-bluegray",
  "from-pink via-paper to-orange",
  "from-cyan via-paper to-acid"
];

export function ArtworkImage({ src, alt, className = "", priority }: ArtworkImageProps) {
  const [failed, setFailed] = useState(false);
  const palette = palettes[Math.abs(src.length) % palettes.length];

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${palette} ${className}`}
      aria-label={alt}
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(17,17,17,.2)_1px,transparent_1px),linear-gradient(180deg,rgba(17,17,17,.18)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute left-4 top-4 rounded-full border border-ink/20 bg-paper/70 px-3 py-1 font-display text-[10px] uppercase tracking-[0.18em] text-ink/70">
        替换作品图
      </div>
      <div className="absolute bottom-5 right-5 h-20 w-20 rounded-full border border-ink/25 bg-white/25" />
      <div className="absolute bottom-9 right-11 h-14 w-24 rounded-[50%] border-2 border-ink/30 bg-paper/35" />
      {!failed && (
        // 之后把 /public/images 中的占位路径替换成真实作品图即可。
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
