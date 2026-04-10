"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const SceneBackground = dynamic(() => import("./scene-background"), {
  ssr: false,
  loading: () => (
    <div
      className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
      aria-hidden
    />
  ),
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = (reduceMotion: boolean | null) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
});

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-24 pt-28 sm:px-6"
    >
      <SceneBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-[var(--background)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-4xl text-center"
      >
        <motion.p
          variants={item(reduceMotion)}
          className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/90 sm:text-sm"
        >
          Desenvolvimento de sistemas
        </motion.p>
        <motion.h1
          variants={item(reduceMotion)}
          className="text-balance bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Software que acompanha o crescimento do seu negócio
        </motion.h1>
        <motion.p
          variants={item(reduceMotion)}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          A Kari Sistemas projeta, constrói e evolui sistemas sob medida — da
          arquitetura à entrega — com foco em clareza, performance e manutenção
          no longo prazo.
        </motion.p>
        <motion.div
          variants={item(reduceMotion)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#contato"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-8 text-sm font-semibold text-slate-950 shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)] transition hover:brightness-110"
          >
            Iniciar conversa
          </a>
          <a
            href="#servicos"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/40 px-8 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-cyan-500/50 hover:text-white"
          >
            Ver serviços
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-slate-600/60 pt-2">
          <motion.span
            animate={reduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-cyan-400/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
