import { useState } from "react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { stats } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Count-up stat band using NumberFlow, triggered when scrolled into view
 * (user-provided animated-number effect).
 */
function StatItem({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const [value, setValue] = useState(0);

  return (
    <motion.div
      onViewportEnter={() => setValue(stat.value)}
      onViewportLeave={() => setValue(0)}
      viewport={{ margin: "-60px" }}
      className="flex flex-col items-center gap-2 text-center"
    >
      <Reveal delay={index * 0.1}>
        <div className="font-display text-5xl font-black tracking-tighter text-gold sm:text-6xl">
          {stat.isRealtime ? (
            <span className="gold-gradient-text">Real-Time</span>
          ) : (
            <NumberFlow
              value={value}
              prefix={stat.prefix ?? ""}
              suffix={stat.suffix ?? ""}
              format={{
                minimumFractionDigits: stat.decimals ?? 0,
                maximumFractionDigits: stat.decimals ?? 0,
              }}
              transformTiming={{ duration: 1200, easing: "ease-out" }}
            />
          )}
        </div>
        <p className="text-muted mx-auto mt-2 max-w-[220px] text-sm leading-snug">
          {stat.label}
        </p>
      </Reveal>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="surface border-y py-20" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
