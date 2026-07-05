import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personas } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Personas() {
  return (
    <section className="surface-soft py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Problem We Solve"
          title="Physics the Way It Should Be Learned"
          subtitle="Whether you're a student drowning in abstract theory, a teacher limited by a 45-minute period, or a school stretched by aging infrastructure — Morphysics was built for you."
        />

        <div className="mt-20 flex flex-col gap-24">
          {personas.map((persona, i) => (
            <div
              key={persona.headline}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
              )}
            >
              {/* Image */}
              <Reveal
                delay={0.1}
                className={cn(
                  persona.imageSide === "left" ? "lg:order-1" : "lg:order-2",
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 0.6 : -0.6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-deep/20"
                >
                  <img
                    src={persona.image}
                    alt={persona.imageAlt}
                    loading="lazy"
                    className={cn(
                      "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                      persona.wideCrop ? "aspect-[16/8]" : "aspect-[16/10]",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-slate-deep shadow-lg">
                    {persona.badge}
                  </div>
                </motion.div>
              </Reveal>

              {/* Text */}
              <Reveal
                delay={0.2}
                className={cn(
                  persona.imageSide === "left" ? "lg:order-2" : "lg:order-1",
                )}
              >
                <h3 className="display-headline text-3xl sm:text-4xl lg:text-5xl">
                  {persona.headline}
                </h3>

                <div className="mt-7 space-y-5">
                  <div className="border-l-4 border-red-400/70 pl-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-red-400">
                      The problem
                    </p>
                    <p className="text-muted text-sm leading-relaxed sm:text-base">
                      {persona.problem}
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gold-hover dark:text-gold">
                      The Morphysics way
                    </p>
                    <p className="text-muted text-sm leading-relaxed sm:text-base">
                      {persona.solution}
                    </p>
                  </div>
                </div>

                <p className="text-muted mt-6 rounded-2xl border border-dashed p-4 text-sm italic" style={{ borderColor: "var(--border)" }}>
                  📊 {persona.stat}
                </p>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group mt-7 inline-flex items-center gap-2 font-bold text-gold-hover transition-colors hover:text-gold dark:text-gold dark:hover:text-gold-hover"
                >
                  {persona.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
