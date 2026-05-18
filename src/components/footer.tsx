import Link from "next/link";
import { contactEmail, socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-navy text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl font-bold">Ekou Bird&apos;s Workshop / 江口鸟鸟工坊</p>
          <p className="mt-3 max-w-md text-sm text-paper/70">
            机械日常、角色与小型世界观。
          </p>
        </div>
        <div>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.18em] text-cyan">
            联系
          </p>
          <a className="text-sm text-paper/80 hover:text-acid" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
        <div>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.18em] text-cyan">
            社交平台
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-paper/75">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-acid">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-paper/10 px-5 py-5 text-xs text-paper/55 md:flex-row md:items-center md:justify-between md:px-8">
        <span>© 2026 江口鸟鸟工坊。保留所有权利。</span>
        <Link href="#" className="hover:text-acid">
          回到顶部
        </Link>
      </div>
    </footer>
  );
}
