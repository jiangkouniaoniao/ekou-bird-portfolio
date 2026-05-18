import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkImage } from "@/components/artwork-image";
import { projectsData, worksData } from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const related = worksData
    .filter((work) => work.category.some((tag) => project.tags.includes(tag)))
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-10 md:px-8">
      <section className="overflow-hidden rounded-xl border-2 border-ink bg-white shadow-[6px_6px_0_#111]">
        <ArtworkImage src={project.cover} alt={`${project.title}封面`} className="aspect-[16/8] min-h-[320px] w-full" priority />
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">
            项目详情
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-none md:text-7xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-ink bg-acid px-4 py-2 text-sm font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="paper-panel rounded-xl p-6 md:p-8">
          <p className="font-display text-2xl font-bold text-navy">
            一个关于圆润工坊机械、实用机器人、维修角色和轻工业世界观的系列。
          </p>
          <p className="mt-5 leading-8 text-ink/72">
            {project.title} 收集的是可亲近而不是冷酷的实用机械：机械蛋、小型机器人、维修设备和边缘圆润的轻工业造型。它们共同指向一个机器属于日常劳动、餐车、小店和旅行路途的世界。
          </p>
          <p className="mt-4 leading-8 text-ink/72">
            这个系列关注圆润工坊机械、实用机器人、维修角色和轻工业世界观。机械不是冰冷的武器，而是可以被触摸、修理、借用、带着一起生活的工具。
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-black">图片组</h2>
          <span className="rounded-full bg-bluegray px-4 py-2 text-sm font-bold">{project.count}</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["/images/machine-egg.jpg", "/images/mini-tank.jpg", "/images/ramen-vehicle.jpg", "/images/tactical-girl.jpg", "/images/city-car.jpg", "/images/country-shop.jpg"].map((src, index) => (
            <div key={src} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <ArtworkImage src={src} alt={`${project.title}作品图 ${index + 1}`} className="aspect-[4/3] rounded-lg border border-ink/12" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        {[
          ["过程 / 笔记", "造型语言从友好的整体轮廓开始，再加入铰链、面板、把手和维修痕迹，让功能感自然出现。"],
          ["材质气质", "喷漆金属、纸质标签、温暖塑料、橡胶轮和柔软布料，让机械保持贴近日常的温度。"],
          ["世界观钩子", "每一个道具都应该暗示谁在使用它、它夜里停在哪里、它解决了什么小麻烦。"]
        ].map(([title, text]) => (
          <article key={title} className="rounded-xl border border-ink/12 bg-white/72 p-6">
            <h3 className="font-display text-2xl font-bold">{title}</h3>
            <p className="mt-3 leading-7 text-ink/68">{text}</p>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="font-display text-4xl font-black">相关作品</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((work) => (
            <article key={work.slug} className="overflow-hidden rounded-lg border border-ink/12 bg-white/70">
              <ArtworkImage src={work.image} alt={work.title} className="aspect-[4/3]" />
              <div className="p-5">
                <h3 className="font-display text-2xl font-bold">{work.title}</h3>
                <p className="mt-2 text-sm text-ink/66">{work.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/works" className="sticker-button mt-8 inline-block bg-ink px-5 py-3 font-bold text-paper">
          返回作品
        </Link>
      </section>
    </main>
  );
}
