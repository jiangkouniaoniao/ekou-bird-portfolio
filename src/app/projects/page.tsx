import Link from "next/link";
import { ArtworkImage } from "@/components/artwork-image";
import { projectsData } from "@/data/portfolio";

export default function Page() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 md:px-8">
      <section className="max-w-4xl">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">
          项目档案
        </p>
        <h1 className="mt-4 font-display text-5xl font-black leading-none md:text-7xl">
          项目
        </h1>
        <p className="mt-6 text-lg leading-8 text-ink/70">
          一个持续生长的索引，整理工坊机械、日常载具、角色档案、旅行札记和世界观碎片。
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <article
            key={project.slug}
            className="paper-panel overflow-hidden rounded-xl border-2 border-ink/12 hover:border-ink"
          >
            <ArtworkImage src={project.cover} alt={project.title} className="aspect-[16/9]" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-ink bg-acid px-3 py-1 font-display text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold text-ink/62">{project.status}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-black">{project.title}</h2>
              <p className="mt-3 leading-7 text-ink/68">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-bluegray px-3 py-1 text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="sticker-button mt-6 inline-block bg-white px-5 py-3 font-bold"
              >
                查看项目
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
