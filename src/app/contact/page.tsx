import { ContactForm } from "@/components/contact-form";
import { contactEmail, socialLinks } from "@/data/portfolio";

const faqs = [
  ["现在开放委托吗？", "开放 / 请先沟通。欢迎简短说明需求，尤其是概念设计、角色设定和视觉开发方向。"],
  ["你更喜欢什么类型的项目？", "有原创世界观、日常机械、角色驱动设计或游戏美术生产需求的项目最适合。"],
  ["一个项目通常需要多久？", "小型单张通常一到三周。更完整的概念组会根据范围、反馈轮次和生产需求评估。"],
  ["可以授权已有作品吗？", "可以。请在询价里说明用途、地区、周期和预算，方便明确讨论授权方式。"]
];

export default function Page() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 md:px-8">
      <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pink">联系</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-none md:text-7xl">
            委托 / 合作询价
          </h1>
          <p className="mt-6 leading-8 text-ink/70">
            适用于美术方向、概念设计、角色设定、机械与载具方案、场景关键视觉或原创世界观项目。
          </p>
          <div className="mt-8 rounded-xl border-2 border-ink bg-orange p-5 shadow-[5px_5px_0_#111]">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em]">邮箱</p>
            <a href={`mailto:${contactEmail}`} className="mt-2 block break-all font-display text-2xl font-bold">
              {contactEmail}
            </a>
            <p className="mt-4 text-sm font-bold">委托状态：开放 / 请先沟通</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-ink/15 bg-white/66 px-4 py-2 text-sm font-bold hover:bg-bluegray">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="mt-20">
        <h2 className="font-display text-4xl font-black">常见问题</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <article key={question} className="rounded-xl border border-ink/12 bg-white/68 p-6">
              <h3 className="font-display text-2xl font-bold">{question}</h3>
              <p className="mt-3 leading-7 text-ink/68">{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
