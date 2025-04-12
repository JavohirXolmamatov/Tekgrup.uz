import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Bu optional, faqat style bo‘lsa

import { sertifikat1, sertifikat2, sertifikat3 } from "../assets/index";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SwiperSertificat = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper mb-5"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        <SwiperSlide>
          <div className="md:h-[500px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img
              src={sertifikat1}
              alt="sertifikat1"
              className="w-[230px] h-[500px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img
              src={sertifikat2}
              alt="sertifikat2"
              className="w-[230px] h-[500px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img
              src={sertifikat3}
              alt="sertifikat3"
              className="w-[230px] h-[500px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img
              src={sertifikat1}
              alt="sertifikat1"
              className="w-[230px] h-[500px] object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSertificat;
