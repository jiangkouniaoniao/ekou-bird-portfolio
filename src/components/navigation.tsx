"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/works", label: "作品" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" }
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/projects")) return pathname.startsWith("/projects");
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3 focus:outline-none">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-ink bg-acid font-display text-sm font-bold shadow-[3px_3px_0_#111] transition-transform group-hover:-rotate-6">
            EB
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-[0.16em]">
            江口鸟鸟工坊
          </span>
        </Link>

        <button
          type="button"
          className="sticker-button bg-white px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="展开导航"
        >
          菜单
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink ${
                isActive(item.href)
                  ? "bg-ink text-paper"
                  : "text-ink/72 hover:bg-bluegray hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 pb-5 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg border border-ink/10 px-4 py-3 text-sm ${
                  isActive(item.href) ? "bg-ink text-paper" : "bg-white/55"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
