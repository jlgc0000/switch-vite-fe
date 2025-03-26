import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import team from "../data/team.json";

const slides = team.installations;

const InstallationGallery = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center w-full overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-500 mb-8">OUR TEAM</h2>
        <p className="text-lg text-gray-700 mb-12">{team.ourteam.description}</p>
      </div>
      <div className="max-w-6xl mx-auto">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full aspect-[16/9] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstallationGallery;