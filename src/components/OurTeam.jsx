import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import team from "../data/team.json";
import nz3 from '../assets/images/tech.jpg';

const slides = team.installations;

const InstallationGallery = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-6 py-20 text-center">
      {/*<div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-8 text-4xl font-extrabold text-indigo-500">*/}
        
        <div className="mb-72 mt-20 mx-auto max-w-6xl text-center">
        <h2 className="mb-16 text-4xl font-extrabold text-indigo-500">
          Meet the People Behind the Connection
        </h2>
        <p
          className="mb-12 text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: team.ourteam.description }}
        ></p>
      </div>
      {/*<div className="mx-auto max-w-6xl">
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
                className="aspect-[16/9] w-full rounded-lg object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>*/}
    </section>
  );
};

export default InstallationGallery;
