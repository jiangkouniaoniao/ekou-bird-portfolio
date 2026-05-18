import Link from "next/link";
import { ArtworkImage } from "@/components/artwork-image";

const focusAreas = [
  "游戏美术",
  "角色设计",
  "载具设计",
  "场景概念",
  "个人世界观",
  "创作工具"
];

const tools = ["Photoshop", "Procreate", "Blender", "Unity / Unreal", "AI 辅助工作流"];

export default function Page() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 md:px-8">
      <section className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="paper-panel aspect-[4/5] overflow-hidden rounded-xl border-2 border-ink/12">
          <ArtworkImage src="/images/traveler-girl.jpg" alt="头像或自画像占位图" className="h-full w-full" priority />
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">关于</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-none md:text-7xl">
            创作实用机械、轻冒险角色和温柔日常场景。
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/72">
            我创作角色、机械、载具和带有日常气息的小型世界。作品介于游戏概念设计、视觉开发和个人世界观构建之间。
          </p>
          <p className="mt-4 leading-8 text-ink/72">
            我创作角色、机械、载具和带有日常气息的小型世界。它们通常来自某个还在生长的原创世界：维修工、移动餐车、街道小店、雪地旅人、圆润机器和动物伙伴会在同一个视觉系统里相遇。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="sticker-button bg-ink px-5 py-3 font-bold text-paper">
              委托 / 联系
            </Link>
            <a href="/cv-placeholder.pdf" className="sticker-button bg-white px-5 py-3 font-bold">
              下载简历
            </a>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-ink/12 bg-white/66 p-7">
          <h2 className="font-display text-3xl font-black">关注方向</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span key={area} className="rounded-full border border-ink bg-bluegray px-4 py-2 text-sm font-bold">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-ink/12 bg-orange/70 p-7">
          <h2 className="font-display text-3xl font-black">技能 / 工具</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {tools.map((tool) => (
              <div key={tool} className="rounded-lg border border-ink/14 bg-paper/75 px-4 py-3 font-semibold">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
