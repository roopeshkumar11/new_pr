import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const turbanImages = [
  {
    title: "Royal Blue Turban",
    image: "/tb4.jpg",
  },
  {
    title: "Wedding Red Turban",
    image: "/tb1.jpg",
  },
  {
    title: "Golden Embroidered Turban",
       image: "/tb3.jpg",
  },
  {
    title: "Classic White Turban",
    image: "/tb2.jpg",
  },
];

function TurbanSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-3xl text-center text-green-400 font-bold mb-6">Turban Showcase</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="rounded-xl shadow-lg"
      >
        {turbanImages.map((turban, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={turban.image}
                alt={turban.title}
                className="w-[100%] h-[400px] object-contain  rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-6 py-4 rounded-b-xl">
                <h3 className="text-black text-xl font-semibold">{turban.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TurbanSlider;
