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
        centeredSlides={true}
        spaceBetween={80}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[250px] w-[400px] bg-white flex items-center justify-center align-middle">
            <img src={onko} alt="onko" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[250px] w-[400px] bg-white flex items-center justify-center align-middle">
            <img src={pf} alt="pf" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[250px] w-[400px] bg-white flex items-center justify-center align-middle">
            <img src={kopas} alt="kopas" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[250px] w-[400px] bg-white flex items-center justify-center align-middle">
            <img src={atabay} alt="atabay" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[250px] w-[400px] bg-white flex items-center justify-center align-middle">
            <img src={astella} alt="astella" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[250px] w-[400px] bg-white flex items-center justify-center align-middle">
            <img src={dalin} alt="dalin" className="w-[230px] h-[130px]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipers;
