"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Descoberta",
    text: "Entendemos processos, restrições e métricas de sucesso antes de escrever código.",
  },
  {
    step: "02",
    title: "Desenho técnico",
    text: "Arquitetura, contratos e priorização para reduzir risco e alinhar expectativas.",
  },
  {
    step: "03",
    title: "Construção iterativa",
    text: "Entregas frequentes, feedback contínuo e qualidade embutida no fluxo.",
  },
  {
    step: "04",
    title: "Operação",
    text: "Monitoramento, documentação e roadmap de melhorias junto ao seu time.",
  },
];

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="processo" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90">
            Processo
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Transparência em cada etapa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Você acompanha decisões técnicas e entregas de forma objetiva — sem
            surpresas no cronograma ou no escopo.
          </p>
        </motion.div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="relative flex gap-5 rounded-2xl border border-[var(--border-subtle)] bg-slate-900/35 p-6"
            >
              <span className="font-mono text-sm font-medium text-cyan-400/80">
                {step.step}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
