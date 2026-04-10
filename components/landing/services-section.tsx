"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Sistemas sob medida",
    description:
      "Aplicações web e backends alinhados ao seu domínio, com modelagem clara e APIs estáveis.",
    icon: "◆",
  },
  {
    title: "Integrações",
    description:
      "Conecte ERPs, pagamentos, filas e serviços externos com rastreabilidade e segurança.",
    icon: "◇",
  },
  {
    title: "Evolução contínua",
    description:
      "Observabilidade, deploys previsíveis e melhorias incrementais sem travar o negócio.",
    icon: "○",
  },
];

const cardVariants = (reduceMotion: boolean | null) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * index,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
});

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="servicos"
      className="relative border-t border-[var(--border-subtle)] bg-slate-950/40 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90">
            O que fazemos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Engenharia aplicada ao seu contexto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Combinamos boas práticas de desenvolvimento com comunicação próxima,
            para entregar valor cedo e manter o sistema saudável após o go-live.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              custom={index}
              variants={cardVariants(reduceMotion)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition hover:border-cyan-500/25"
            >
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-lg text-cyan-300"
                aria-hidden
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:bg-cyan-400/15" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
