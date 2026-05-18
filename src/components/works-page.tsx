"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArtworkImage } from "@/components/artwork-image";
import { tags, worksData } from "@/data/portfolio";

export function WorksPage() {
  const [active, setActive] = useState("All");
  const works = useMemo(
    () =>
      active === "All"
        ? worksData
        : worksData.filter((work) => work.category.includes(active)),
    [active]
  );

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 md:px-8">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">作品档案</p>
        <h1 className="mt-4 font-display text-6xl font-black md:text-8xl">作品</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/68">
          精选视觉开发、角色、机械、载具、场景与世界观作品。
        </p>
      </motion.div>

      <div className="sticky top-[73px] z-30 -mx-5 mt-10 border-y border-ink/10 bg-paper/88 px-5 py-3 backdrop-blur md:-mx-8 md:px-8">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink ${
                active === tag ? "border-ink bg-ink text-paper" : "border-ink/18 bg-white/65 hover:bg-bluegray"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {works.map((work) => (
            <motion.article
              layout
              key={work.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-lg border border-ink/14 bg-white/72 shadow-sm"
            >
              <Link href={work.slug === "machine-egg" ? "/projects/mecha-workshop" : `/works#${work.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ArtworkImage src={work.image} alt={work.title} className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-1 bg-ink/74 p-4 text-paper opacity-0 backdrop-blur transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-paper/76">{work.description}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-display text-2xl font-bold">{work.title}</h2>
                    <span className="rounded-full bg-bluegray px-3 py-1 text-xs font-bold">{work.year}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.category.map((tag) => (
                      <span key={tag} className="rounded-full border border-ink/14 px-3 py-1 text-xs text-ink/68">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
