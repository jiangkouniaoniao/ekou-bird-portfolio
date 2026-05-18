"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArtworkImage } from "@/components/artwork-image";
import { contactEmail, projectsData, socialLinks, worksData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 }
};

const archiveFilters = ["全部", "角色", "机械", "场景", "载具", "世界观"];

export function HomePage() {
  return (
    <main>
      <Hero />
      <StyleDirection />
      <FeaturedWorks />
      <ProjectIndex />
      <AboutPreview />
      <ContactStrip />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-74px)] max-w-[1440px] items-center gap-10 px-5 py-10 md:grid-cols-12 md:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:col-span-6"
      >
        <div className="mb-5 inline-flex rotate-[-1deg] items-center gap-2 rounded-full border border-ink bg-acid px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.18em] shadow-[3px_3px_0_#111]">
          工坊年鉴 01
        </div>
        <h1 className="font-display text-5xl font-black leading-[0.95] tracking-normal text-ink sm:text-6xl lg:text-8xl">
          Ekou Bird&apos;s Workshop
        </h1>
        <p className="mt-5 max-w-xl font-display text-xl text-navy md:text-2xl">
          江口鸟鸟工坊 / 机械日常、角色与小型世界观
        </p>
        <p className="mt-4 max-w-xl text-lg leading-8 text-ink/72">
          机械、日常、角色与小型世界观的视觉工坊。
        </p>
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.35 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          {["机械日常", "角色设定", "小型世界观"].map((tag, index) => (
            <motion.span
              key={tag}
              variants={fadeUp}
              className={`rounded-full border border-ink px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_#111] ${
                index === 0 ? "bg-cyan" : index === 1 ? "bg-pink text-white" : "bg-white"
              }`}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/works" className="sticker-button bg-ink px-6 py-3 font-bold text-paper">
            查看作品
          </Link>
          <Link href="/contact" className="sticker-button bg-white px-6 py-3 font-bold">
            联系我
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, rotate: 1 }}
        animate={{ opacity: 1, y: [0, -8, 0], rotate: -1 }}
        transition={{ opacity: { duration: 0.7 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        className="relative md:col-span-6"
      >
        <div className="paper-panel relative aspect-[4/5] overflow-hidden rounded-[18px] shadow-soft">
          <ArtworkImage
            src="/images/ramen-vehicle.jpg"
            alt="拉面餐车作品，呈现机械、日常与小世界观的首页主视觉"
            priority
            className="h-full w-full"
          />
          <div className="absolute bottom-5 left-5 rounded-lg border border-ink bg-paper/90 px-4 py-3 shadow-[4px_4px_0_#111]">
            <p className="font-display text-xs uppercase tracking-[0.18em]">机械 x 日常 x 故事</p>
          </div>
        </div>
        <div className="absolute -left-3 top-1/2 hidden w-28 -translate-y-1/2 -rotate-6 overflow-hidden rounded-lg border border-ink bg-paper shadow-[4px_4px_0_#111] sm:block lg:-left-8">
          <ArtworkImage src="/images/machine-egg.jpg" alt="圆润机械蛋作品缩略图" className="aspect-square" />
          <p className="px-3 py-2 text-xs font-bold">圆润机械</p>
        </div>
        <div className="absolute -right-2 bottom-16 hidden w-28 rotate-6 overflow-hidden rounded-lg border border-ink bg-paper shadow-[4px_4px_0_#111] sm:block lg:-right-6">
          <ArtworkImage src="/images/traveler-girl.jpg" alt="旅人少女角色作品缩略图" className="aspect-[4/5]" />
          <p className="px-3 py-2 text-xs font-bold">轻冒险角色</p>
        </div>
        <div className="absolute left-12 -bottom-8 hidden w-36 rotate-2 overflow-hidden rounded-lg border border-ink bg-paper shadow-[4px_4px_0_#111] md:block">
          <ArtworkImage src="/images/country-shop.jpg" alt="乡下小店场景作品缩略图" className="aspect-[4/3]" />
          <p className="px-3 py-2 text-xs font-bold">街景与小店</p>
        </div>
        <div className="absolute -right-2 top-8 rotate-6 rounded-full border border-ink bg-orange px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.18em] shadow-[3px_3px_0_#111] md:-right-4">
          工坊封面
        </div>
        <div className="absolute -bottom-4 left-8 -rotate-3 rounded-full border border-ink bg-cyan px-4 py-2 text-sm font-bold shadow-[3px_3px_0_#111]">
          实用机器人 / 街道札记 / 旅人
        </div>
      </motion.div>
    </section>
  );
}

function StyleDirection() {
  const cards = [
    {
      title: "工坊机械",
      text: "圆润、有生活感的机械设计，像真的会被带去修理日常问题。",
      icon: "M-01",
      color: "hover:border-cyan"
    },
    {
      title: "旅行场景",
      text: "清新、有空气感的街道、雪地、小店和移动摊位。",
      icon: "T-02",
      color: "hover:border-orange"
    },
    {
      title: "角色与伙伴",
      text: "角色、动物伙伴与轻冒险装备，带一点旅人和工坊气质。",
      icon: "C-03",
      color: "hover:border-pink"
    }
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8">
      <SectionKicker label="风格方向" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <motion.article
            key={card.title}
            whileHover={{ y: -6 }}
            className={`paper-panel rounded-lg border-2 border-ink/12 p-6 transition-colors ${card.color}`}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-full border border-ink bg-white px-3 py-1 font-display text-xs font-bold">
                {card.icon}
              </span>
              <span className="h-8 w-8 rounded-full border border-dashed border-ink/45" />
            </div>
            <h2 className="font-display text-2xl font-bold">{card.title}</h2>
            <p className="mt-3 leading-7 text-ink/70">{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function FeaturedWorks() {
  const featured = worksData.filter((work) => work.featured).slice(0, 9);

  return (
    <section id="works" className="bg-white/45 py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionKicker label="精选作品" />
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-black md:text-6xl">
              像翻开设定年鉴一样，看见机器、旅人和小地方。
            </h2>
          </div>
          <Link href="/works" className="sticker-button w-fit bg-acid px-5 py-3 font-bold">
            查看全部作品
          </Link>
        </div>
        <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-6">
          {featured.map((work, index) => (
            <motion.article
              key={work.slug}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-lg border border-ink bg-white shadow-sm ${
                index === 0 || index === 5 ? "md:col-span-3 md:row-span-2" : "md:col-span-2"
              }`}
            >
              <ArtworkImage src={work.image} alt={work.title} className="h-full w-full" />
              <div className="absolute inset-x-3 bottom-3 translate-y-3 rounded-md border border-ink/15 bg-paper/92 p-3 opacity-0 shadow-soft backdrop-blur transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold">{work.title}</h3>
                  <span className="text-xs text-ink/60">{work.year}</span>
                </div>
                <p className="mt-1 text-xs text-ink/70">{work.category.join(" / ")}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectIndex() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(
    () =>
      projectsData.filter((project) =>
        filter === "全部" ? true : project.tags.some((tag) => tag === filter)
      ),
    [filter]
  );

  return (
    <section id="projects" className="mx-auto max-w-[1440px] px-5 py-20 md:px-8">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionKicker label="项目档案" />
          <h2 className="mt-4 font-display text-4xl font-black md:text-6xl">
            一个可以持续扩展的小世界工坊索引。
          </h2>
          <p className="mt-5 max-w-md leading-8 text-ink/70">
            像设定集目录一样整理项目：角色、机械、载具、街景和世界观碎片都能持续增加。
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {archiveFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink ${
                  filter === item ? "border-ink bg-ink text-paper" : "border-ink/20 bg-white/60 hover:bg-bluegray"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <motion.div layout className="grid gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                whileHover={{ rotate: index % 2 === 0 ? -0.5 : 0.5, y: -4 }}
                className="group paper-panel relative overflow-hidden rounded-lg border-2 border-ink/12 p-5 hover:border-ink"
              >
                <div className="absolute right-5 top-5 rounded-full border border-ink bg-acid px-3 py-1 font-display text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="grid gap-5 md:grid-cols-[150px_1fr]">
                  <ArtworkImage src={project.cover} alt={project.title} className="aspect-[4/3] rounded-md border border-ink/15" />
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-bluegray px-3 py-1 text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-3xl font-black">{project.title}</h3>
                    <p className="mt-2 text-ink/70">{project.description}</p>
                    <div className="archive-dash my-4 h-px" />
                    <div className="flex flex-col gap-3 text-sm text-ink/66 sm:flex-row sm:items-center sm:justify-between">
                      <span>{project.count}</span>
                      <span>状态：{project.status}</span>
                      <Link href={`/projects/${project.slug}`} className="font-bold text-ink underline decoration-pink decoration-2 underline-offset-4">
                        查看项目
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-navy py-20 text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 md:grid-cols-[1fr_0.9fr] md:px-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-cyan">关于创作者</p>
          <h2 className="mt-4 font-display text-4xl font-black md:text-6xl">
            带着轻快工坊精神，搭建角色、机械和原创世界。
          </h2>
        </div>
        <div className="self-end">
          <p className="leading-8 text-paper/78">
            我创作角色、机械、载具和带有日常气息的小型世界。作品介于游戏概念设计、视觉开发和个人世界观构建之间。
          </p>
          <p className="mt-4 leading-8 text-paper/78">
            它们通常像某个原创世界的一角：维修工、移动餐车、街道小店、雪地旅人、圆润机器和动物伙伴会在同一套视觉系统里相遇。
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/about" className="sticker-button bg-paper px-5 py-3 font-bold text-ink">
              阅读关于
            </Link>
            <Link href="/contact" className="sticker-button bg-cyan px-5 py-3 font-bold text-ink">
              委托 / 联系
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-8">
      <div className="rounded-xl border-2 border-ink bg-orange p-6 shadow-[6px_6px_0_#111] md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em]">委托状态：开放 / 请先沟通</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-5xl">一起搭建一个小世界。</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href={`mailto:${contactEmail}`} className="font-bold underline underline-offset-4">
                {contactEmail}
              </a>
              {socialLinks.slice(0, 4).map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:underline">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={async () => {
                await navigator.clipboard?.writeText(contactEmail);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              }}
              className="sticker-button bg-white px-5 py-3 font-bold"
            >
              {copied ? "邮箱已复制" : "复制邮箱"}
            </button>
            <Link href="/contact" className="sticker-button bg-ink px-5 py-3 font-bold text-paper">
              联系表单
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionKicker({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-3 w-3 rounded-full bg-pink" />
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-ink/60">{label}</p>
    </div>
  );
}
