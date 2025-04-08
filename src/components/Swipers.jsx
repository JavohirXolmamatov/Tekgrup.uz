import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Bu optional, faqat style bo‘lsa

import { astella, atabay, dalin, kopas, onko, pf } from "../assets/index";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Swipers = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={80}
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
          <div className="md:h-[250px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img src={onko} alt="onko" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[250px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img src={pf} alt="pf" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[250px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img src={kopas} alt="kopas" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[250px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img src={atabay} alt="atabay" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[250px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img src={astella} alt="astella" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[250px] h-[200px] md:w-[400px] w-full bg-white flex items-center justify-center align-middle">
            <img src={dalin} alt="dalin" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipers;
