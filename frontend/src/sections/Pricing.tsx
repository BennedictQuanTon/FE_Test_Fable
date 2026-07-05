import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { pricingPlans } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="surface-soft py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing Plans"
          title="A Plan for Every Learner"
          subtitle="From a free playground to a full-school virtual lab — pick the tier that fits, upgrade any time."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
