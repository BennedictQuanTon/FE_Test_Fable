import { partnerLogos } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Partners() {
  const looped = [...partnerLogos, ...partnerLogos];

  return (
    <section className="surface border-y py-12" style={{ borderColor: "var(--border)" }}>
      <Reveal>
        <p className="text-muted mb-8 text-center text-xs font-bold uppercase tracking-[0.28em]">
          Trusted by leading institutions across Vietnam
        </p>
      </Reveal>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
          {looped.map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-14 w-auto shrink-0 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-16"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
