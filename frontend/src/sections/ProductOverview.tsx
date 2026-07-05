import { motion } from "framer-motion";
import { BrainCircuit, Orbit, SlidersHorizontal } from "lucide-react";
import { featureCards } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { RadialGlowButton } from "@/components/ui/RadialGlowButton";

const ICONS = {
  brain: BrainCircuit,
  canvas: Orbit,
  sliders: SlidersHorizontal,
};

export function ProductOverview() {
  return (
    <section className="surface relative overflow-hidden py-24 sm:py-28">
      <div className="aurora-blob right-[-12%] top-[10%] h-[380px] w-[380px] bg-gold/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Overview"
          title="Your AI-Powered Physics Lab"
          subtitle="Input any physics problem. Morphysics reads it, extracts every variable, and instantly builds a fully interactive 2D simulation — tailored to your exact scenario."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {featureCards.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="card-surface group relative h-full overflow-hidden rounded-3xl p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-gold/10"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition-all duration-500 group-hover:bg-gold/20" />

                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-hover transition-transform duration-500 group-hover:rotate-[12deg] group-hover:scale-110 dark:text-gold">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {card.body}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-5" delay={0.2}>
          <p className="text-muted text-lg font-medium">
            Ready to see your problem come alive?
          </p>
          <RadialGlowButton>Start for Free</RadialGlowButton>
        </Reveal>
      </div>
    </section>
  );
}
