import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import Reveal from '@components/common/Reveal';
import { testimonials } from '@data/homeData';

import 'swiper/css';
import 'swiper/css/pagination';

function GoogleLogo({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.5 0-14 4.2-17.7 10.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.4-2.1 14.1-5.5l-6.5-5.5C29.5 34.7 26.9 35.5 24 35.5c-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C9.9 39.6 16.4 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.5 5.5C41 35.5 44 30.2 44 24c0-1.2-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

function TestimonialCard({ t }) {
  const rating = t.rating ?? 5;

  return (
    <div className="relative pb-6 pl-4">
      {/* Speech-bubble body */}
      <div className="relative rounded-[28px] bg-[#0B1A3A] p-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-lg font-bold text-gray-900">{t.name},</p>
          <blockquote className="mt-3 text-sm leading-relaxed text-gray-600">
            {t.quote}
          </blockquote>
          <p className="mt-4 text-sm font-bold text-gray-900">Thanks Eclick</p>
          <div className="mt-1.5 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>

        {/* Speech-bubble tail */}
        <div className="absolute -bottom-4 left-8 h-8 w-8 rounded-br-2xl bg-[#0B1A3A]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <section className="section-pad bg-white">
      <div className="container-app">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-3xl text-[#0B1A3A] md:text-4xl">Client&rsquo;s</p>
          <h2 className="-mt-1 text-4xl font-extrabold md:text-5xl">
            <span className="text-[#0B1A3A]">Feed</span>
            <span className="text-orange-500">back</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-14">
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
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination mt-6 flex justify-center gap-2" />

          {/* Google Reviews badge */}
          <a
            href="https://www.google.com/search?q=eclick+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-2 right-0 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-lg transition hover:shadow-xl"
          >
            <GoogleLogo size={18} />
            <span className="text-xs font-semibold text-gray-700">Google Reviews</span>
          </a>
        </Reveal>
      </div>

      <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          background: rgba(11,26,58,0.2);
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