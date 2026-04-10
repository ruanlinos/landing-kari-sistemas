"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FooterCta() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      id="contato"
      className="relative border-t border-[var(--border-subtle)] px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 p-10 text-center shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)] sm:p-14"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-sky-600/20 blur-3xl" />

          <p className="relative text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/90">
            Contato
          </p>
          <h2 className="relative mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Vamos conversar sobre o seu próximo sistema?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Envie uma mensagem com o contexto do projeto. Retornamos com
            próximos passos e uma visão inicial de escopo e abordagem.
          </p>
          <div className="relative mt-10 flex justify-center">
            <a
              href="mailto:contato@karisistemas.com.br"
              className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-8 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              Enviar e-mail
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Kari Sistemas. Todos os direitos reservados.</p>
          <p className="font-mono text-xs text-slate-600">Built with Next.js · Motion · R3F</p>
        </div>
      </div>
    </footer>
  );
}
