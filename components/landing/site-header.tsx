"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-subtle)] bg-[color-mix(in_oklab,var(--background)_82%,transparent)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#topo"
          className="text-sm font-semibold tracking-tight text-white sm:text-base"
        >
          Kari{" "}
          <span className="text-[var(--accent)]">Sistemas</span>
        </a>
        <nav
          className="flex max-w-[48vw] items-center gap-3 overflow-x-auto whitespace-nowrap text-xs text-slate-300 sm:max-w-none sm:gap-6 sm:text-sm md:gap-8"
          aria-label="Principal"
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="rounded-full border border-cyan-500/35 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-100 transition hover:border-cyan-400/60 hover:bg-cyan-500/20 sm:text-sm"
        >
          Fale conosco
        </a>
      </div>
    </motion.header>
  );
}
