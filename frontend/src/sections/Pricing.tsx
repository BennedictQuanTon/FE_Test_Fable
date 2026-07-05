import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { pricingPlans } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-cloud dark:bg-slate-ink py-24 sm:py-28 transition-colors duration-500 text-slate-deep dark:text-white">
      {/* Aurora background */}
      <div className="aurora-blob right-[-10%] top-[-5%] h-[400px] w-[400px] bg-gold/15 dark:bg-gold/8" />
      <div className="aurora-blob left-[-10%] bottom-[-5%] h-[400px] w-[400px] bg-indigo-500/10 dark:bg-indigo-500/8" />

      {/* Dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(var(--dot-color, rgba(35,39,61,0.08)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="text-left">
            <span className="text-gold text-sm sm:text-base font-extrabold uppercase tracking-[0.22em] mb-3 block">
              Pricing Plans
            </span>
            <h2 className="text-3xl sm:text-4xl tracking-tight !leading-[1.2]">
              <span className="font-sans font-extrabold text-slate-deep dark:text-white">
                A Plan for Every{" "}
              </span>
              <span className="font-display italic font-semibold text-gold">
                Learner.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Thin horizontal line separator */}
        <div className="border-t border-slate-deep/10 dark:border-white/10 mt-6 mb-14 w-full" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7 transition-shadow",
                  plan.popular
                    ? "border-2 border-gold bg-slate-deep text-white shadow-2xl shadow-gold/20 xl:scale-[1.04]"
                    : "card-surface shadow-sm hover:shadow-xl",
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gold px-4 py-1.5 text-xs font-black uppercase tracking-wider text-slate-deep shadow-lg">
                    <Crown className="h-3.5 w-3.5" /> Most Popular
                  </span>
                )}

                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-1 min-h-[36px] text-xs leading-snug",
                    plan.popular ? "text-white/60" : "text-muted",
                  )}
                >
                  {plan.target}
                </p>

                <div className="mt-5">
                  <span className="font-display text-4xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "ml-2 text-xs",
                      plan.popular ? "text-white/60" : "text-muted",
                    )}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                         className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        strokeWidth={3}
                      />
                      <span
                        className={cn(
                          "text-xs leading-relaxed",
                          plan.popular ? "text-white/80" : "text-muted",
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={cn(
                    "mt-8 w-full rounded-xl py-3 text-sm font-bold transition-all active:scale-95",
                    plan.popular
                      ? "bg-gold text-slate-deep shadow-lg shadow-gold/30 hover:bg-gold-hover"
                      : "border-2 border-slate-deep/15 hover:border-gold hover:text-gold-hover dark:border-white/15 dark:hover:border-gold dark:hover:text-gold",
                  )}
                >
                  {plan.cta}
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={0.2}>
          <p className="text-muted text-xs">
            All prices in VND. School package billed per semester. No hidden
            fees. ·{" "}
            <a href="#" className="font-bold text-gold-hover hover:underline dark:text-gold">
              Questions about pricing? See full FAQ →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Pricing;
