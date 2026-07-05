import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/Reveal";

/**
 * Testimonials rendered inside the user's inverted-perspective coverflow
 * carousel (Swiper EffectCoverflow, adapted from Carousel_003).
 */
export function Testimonials() {
  return (
    <section className="surface relative overflow-hidden py-24 sm:py-28">
      <div className="aurora-blob right-[-8%] top-[30%] h-[360px] w-[360px] bg-gold/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved in the Classroom"
          subtitle="Students, teachers, principals, and parents — here's what they say after physics finally clicked."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 mx-auto mt-14 w-full max-w-6xl px-5"
      >
        <Swiper
          spaceBetween={0}
          effect="coverflow"
          grabCursor
          slidesPerView="auto"
          centeredSlides
          loop
          autoplay={{ delay: 3200, disableOnInteraction: true }}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="testimonial-swiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="card-surface flex h-full min-h-[300px] flex-col rounded-3xl p-7 shadow-lg">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="text-muted flex-1 text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t pt-5" style={{ borderColor: "var(--border)" }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full border-2 border-gold object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
