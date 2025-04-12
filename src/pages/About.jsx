import {
  about1,
  bg2,
  birikki,
  medicine,
  tekgrup,
  testimonial,
} from "../assets";
import { Swipers, SwiperSertificat } from "../components";
function About() {
  return (
    <div className="w-full">
      <section className="w-full relative">
        <img
          src={about1}
          alt="about1"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full flex flex-col gap-5 justify-center items-center bg-black/30">
          <h1 data-aos="fade-up" className="text-6xl font-bold text-white">
            Biz haqimizda
          </h1>
          <p data-aos="fade-down" className="text-3xl text-white font-medium">
            Sog‘lom dunyo uchun harakat qilamiz!
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="w-8/10 mx-auto my-30 flex gap-5 justify-between items-center align-middle">
          <div className="w-1/2 pr-5">
            <span className="text-md font-medium uppercase text-blue-300">
              Biz kimmiz?
            </span>
            <h1 className="text-5xl font-bold text-black/90 mt-5">
              Biz bilan, faqat dori-darmon emas, balki keng qamrovli xizmatlarni
              ham kashf eting.
            </h1>
            <p className="mt-5 text-md text-[#573131]">
              «Tek Grup Saglik Hizmetleri» Mas’uliyati Cheklangan Jamiyat
              Xorijiy Korxonasi 2018 yilda tashkil etilgan bo‘lib, TEKGRUP
              xalqaro tanilgan holdingi tarkibiga kiradi va 10 yildan ortiq
              tajribaga ega. U 2023 yildan boshlab O‘zbekiston farmatsevtik
              tarqatish bozorida faoliyat yuritmoqda. Kompaniya o‘z faoliyatini
              «Yaxshi raqobat» prinsipi asosida amalga oshirib, bu prinsipga
              amal qilib, barcha xodimlar va manfaatdor tomonlarga nisbatan shu
              siyosatni davom ettirmoqda. Farmatsevtik mahsulotlar
              assortimentini texnologiyalar rivojlanishi va aholining
              ehtiyojlarini hisobga olgan holda kengaytirmoqda. Yaxshi
              rivojlangan infratuzilma va innovatsion, ijodiy mutaxassislar
              jamoasi yordamida, ular farmatsevtika va sog‘liqni saqlash
              sohasida professional bilim va ko‘nikmalarini doimiy ravishda
              oshirib bormoqda.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={tekgrup}
              alt="tekgrup"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="relative">
        <img
          src={birikki}
          alt="birikki"
          className="w-full md:h-[550px] h-[400px] object-cover"
        />
        <div className="absolute w-full md:h-[550px] h-[400px] top-0 left-0 right-0 bg-black/30 flex flex-col items-center justify-center align-middle gap-y-6">
          <h1
            data-aos="zoom-in"
            className="md:text-5xl text-3xl text-center font-bold md:w-[55%] md:leading-16 text-white"
          >
            Nima Qilamiz?
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white/90 text-lg text-center w-2/4"
          >
            Tek Grup Dori-darmonlar, tibbiy asbob-uskunalar, kosmetika va
            gigiena mahsulotlari bo‘yicha keng assortimentni taqdim etadi.
            Yuqori darajadagi imkoniyatlar va saqlash sharoitlarimiz orqali, biz
            barcha mahsulotlarni mijozlarimizga xavfsiz va ishonchli tarzda
            yetkazib beramiz.
          </p>
          <a
            data-aos="zoom-in"
            href="#"
            className="bg-blue-500 text-white text-lg hover:bg-blue-500/80 font-medium py-3 px-8 rounded-lg"
          >
            Ko'proq bilish
          </a>
        </div>
      </section>

      <section className="w-full bg-blue-500/5 h-auto py-10 box-border">
        <div className="md:w-8/10 w-9/10 mx-auto md:py-20 py-5">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="uppercase text-[#009F7F] font-medium md:text-start text-center"
          >
            Biz nimalar bilan shugu'llanamiz
          </h1>
          <div className="flex md:flex-row flex-col gap-x-5 items-center align-middle">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="md:w-2/4 w-full"
            >
              <h1 className="text-5xl font-medium mt-3 md:text-start text-center">
                « Tek Grup Saglik Hizmetleri » XK MCHJ tomonidan taqdim
                etiladigan xizmatlar
              </h1>
              <img src={testimonial} alt="testimonial" />
            </div>
            <div className="md:w-2/4 w-full flex flex-col gap-5 flex-wrap box-border overflow-hidden">
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white py-10 px-20 text-2xl font-medium
                text-black/40 shadow-xl rounded-xl hover:scale-103
                transition-transform transform duration-300"
              >
                {" "}
                Farmatsevtik mahsulotlarni saqlash va yetkazib berish.
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white py-10 px-20 text-2xl font-medium text-black/40 shadow-xl rounded-xl hover:scale-103 transition-transform transform duration-300"
              >
                Dori-darmonlar, tibbiy asbob-uskunalar, kosmetika va gigiena
                mahsulotlarini marketing va realizatsiya qilish;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mb-10">
        <img
          src={medicine}
          alt="bg1"
          className="w-full md:h-[850px] h-[500px] object-cover"
        />
        <div className="absolute w-full md:h-[850px] top-0 left-0 right-0 bg-green-800/70 flex flex-col items-center justify-center align-middle gap-y-6">
          <h1
            data-aos="zoom-in"
            className="text-6xl text-center font-bold md:w-[50%] leading-16 text-white"
          >
            Bizning Sertifikatlarimiz
          </h1>

          <div className="w-9/10 mx-auto mt-5">{<SwiperSertificat />}</div>
        </div>
      </section>
    </div>
  );
}

export default About;
