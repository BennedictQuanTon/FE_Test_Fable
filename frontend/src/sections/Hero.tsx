import { motion, useScroll, useTransform } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { Sparkles, MousePointerClick } from "lucide-react";
import { HeroSandbox } from "@/components/physics/HeroSandbox";
import { RadialGlowButton } from "@/components/ui/RadialGlowButton";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { FlipText } from "@/components/ui/FlipText";

export function Hero() {
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 600], [0, 140]);
  const blobY2 = useTransform(scrollY, [0, 600], [0, -100]);

  const scrollToPlayground = () => {
    document
      .querySelector("#playground")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-deep pb-16 pt-28 text-white lg:pt-24"
    >
      {/* Aurora background */}
      <motion.div
        style={{ y: blobY }}
        className="aurora-blob left-[-10%] top-[-15%] h-[480px] w-[480px] bg-gold/15"
      />
      <motion.div
        style={{ y: blobY2 }}
        className="aurora-blob bottom-[-20%] right-[-8%] h-[520px] w-[520px] bg-indigo-500/20"
      />
      <div className="aurora-blob left-[38%] top-[45%] h-[300px] w-[300px] bg-rose-400/10" />

      {/* Dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered · Interactive · Physics
          </motion.div>

          <h1 className="display-headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            <FlipText delay={0.15}>Make the</FlipText>
            <br />
            <span className="gold-gradient-text">
              <FlipText delay={0.55}>Static Dynamic.</FlipText>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Morphysics transforms abstract physics problems into real-time,
            AI-generated interactive 2D simulations — instantly.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-xl text-sm text-white/50"
          >
            Input your problem as text, an image, or a document. Watch physics
            come alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <RadialGlowButton>Try it Free</RadialGlowButton>
            <AnimatedButton onClick={scrollToPlayground}>
              <MousePointerClick className="h-4 w-4" />
              Watch the Demo
            </AnimatedButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-10 flex items-center gap-3 text-xs text-white/40"
          >
            <span className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-gold opacity-60" />
              <span className="h-2 w-2 rounded-full bg-gold" />
            </span>
            The sandbox on the right is live — grab an object and throw it.
          </motion.div>
        </div>

        {/* Right column: sandbox + mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <HeroSandbox />
          {/* Mascot */}
          <motion.div
            className="pointer-events-none absolute -bottom-8 -left-6 z-20 h-28 w-28 sm:h-36 sm:w-36"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Player
              autoplay
              loop
              src="/assets/Mascot.json"
              style={{ height: "100%", width: "100%" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/25 p-1.5">
          <div className="h-2 w-1 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
