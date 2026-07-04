import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import Reveal from '@components/common/Reveal';
import { testimonials } from '@data/homeData';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsCarousel() {
  return (
    <section className="section-pad bg-white">
      <div className="container-app">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Client Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">
            Trusted by network marketing leaders
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            aria-label="Client testimonials"
            className="!pb-2"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <figure className="flex h-full flex-col rounded-2xl shadow-md border border-orange-200 shadow-orange-400 glass-panel p-7">
                  <Quote size={22} className="text-primary-500" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-black">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-black/[0.08] pt-4">
                    <p className="text-sm font-medium text-black">{t.name}</p>
                    <p className="text-xs text-black">{t.role}</p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-6 flex justify-center gap-2" />
        </Reveal>
      </div>

      <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          background: rgba(255,255,255,0.2);
          width: 8px;
          height: 8px;
          opacity: 1;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #F97316;
          width: 22px;
          border-radius: 4px;
          transition: width 0.25s ease;
        }
      `}</style>
    </section>
  );
}
