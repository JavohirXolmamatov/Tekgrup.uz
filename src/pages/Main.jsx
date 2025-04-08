import CountUp from "react-countup";
import { bg1, bg2, medicine, onko, testimonial } from "../assets/index";
import { Swipers } from "../components";

function Main() {
  return (
    <div className="w-full mb-10">
      {/* 1 */}
      <section className="relative">
        <img src={bg1} alt="bg1" className="w-full md:h-[650px] object-cover" />
        <div className="absolute w-full md:h-[650px] top-0 left-0 right-0 bg-blue-800/30 flex flex-col items-center justify-center align-middle gap-y-6">
          <span
            data-aos="zoom-in"
            className="uppercase bg-white py-2 px-6 rounded-2xl font-medium text-[#009F7F] tracking-widest"
          >
            TeKgrupga xush kelibsiz
          </span>
          <h1
            data-aos="zoom-in"
            className="text-6xl text-center font-bold md:w-[50%] leading-16 text-white"
          >
            Sog‘lom dunyo uchun harakat qilamiz!
          </h1>
          <p data-aos="zoom-in" className="text-white/90 text-lg">
            Biz bilan, faqat dori-darmon emas, balki keng qamrovli xizmatlarni
            ham kashf eting.
          </p>
          <a
            data-aos="zoom-in"
            href="#"
            className="bg-white text-[#009F7F] text-lg hover:bg-white/90 font-medium py-3 px-8 rounded-lg"
          >
            Ko'proq bilish
          </a>
        </div>
      </section>

      {/* 2 */}
      <section className="w-full py-25 bg-blue-500/5">
        <div
          data-aos="zoom-in-down"
          className="w-8/10 mx-auto flex md:flex-col gap-10 bg-white p-10 rounded-2xl shadow-2xl"
        >
          <div className="flex w-full">
            <div
              data-aos="zoom-in-down"
              className="text-center w-1/3 text-[#0C4DA2]"
            >
              <h1 className="text-5xl font-bold pb-2">
                {<CountUp end={8} duration={2} />}+ yil
              </h1>
              <span className="font-medium text-md">Bozorda mavjud</span>
            </div>
            <div
              data-aos="zoom-in-down"
              className="text-center w-1/3 text-[#0C4DA2]"
            >
              <h1 className="text-5xl font-bold pb-2">
                {<CountUp end={10} duration={2} />}+
              </h1>
              <span className="font-medium text-md">Bozorda mavjud</span>
            </div>
            <div
              data-aos="zoom-in-down"
              className="text-center w-1/3 text-[#0C4DA2]"
            >
              <h1 className="text-5xl font-bold pb-2">
                {<CountUp end={30} duration={2} />}+
              </h1>
              <span className="font-medium text-md">Bozorda mavjud</span>
            </div>
          </div>
          <div className="flex w-full">
            <div
              data-aos="zoom-in-down"
              className="text-center w-1/3 text-[#0C4DA2]"
            >
              <h1 className="text-5xl font-bold pb-2">
                {<CountUp end={15} duration={2} />}+
              </h1>
              <span className="font-medium text-md">Bozorda mavjud</span>
            </div>
            <div
              data-aos="zoom-in-down"
              className="text-center w-1/3 text-[#0C4DA2]"
            >
              <h1 className="text-5xl font-bold pb-2">
                {<CountUp end={200} duration={2} />}+
              </h1>
              <span className="font-medium text-md">Bozorda mavjud</span>
            </div>
            <div
              data-aos="zoom-in-down"
              className="text-center w-1/3 text-[#0C4DA2]"
            >
              <h1 className="text-5xl font-bold pb-2">
                {<CountUp end={2000} duration={1} />}kv
              </h1>
              <span className="font-medium text-md">Bozorda mavjud</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="relative">
        <img src={bg2} alt="bg1" className="w-full md:h-[650px] object-cover" />
        <div className="absolute w-full md:h-[650px] top-0 left-0 right-0 bg-blue-800/30 flex flex-col items-center justify-center align-middle gap-y-6">
          <h1
            data-aos="zoom-in"
            className="text-5xl text-center font-bold md:w-[55%] leading-16 text-white"
          >
            Farmasevtika industriyasida yetakchi distribyutorlardan birimiz
          </h1>
          <p data-aos="zoom-in" className="text-white/90 text-lg">
            Eng yaxshi mijozlar uchun eng yaxshi xizmatlar.
          </p>
          <a
            data-aos="zoom-in"
            href="#"
            className="bg-blue-500 text-white text-lg hover:bg-blue-500/80 font-medium py-3 px-8 rounded-lg"
          >
            Bog'lanish
          </a>
        </div>
      </section>

      {/* 4 */}
      <section className="w-full bg-blue-500/5 h-auto py-10">
        <div className="md:w-8/10 mx-auto py-20">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="uppercase text-[#009F7F] font-medium"
          >
            Nega Bizni tanlashadi
          </h1>
          <div className="flex gap-x-5 items-center align-middle">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="w-2/4"
            >
              <h1 className="text-5xl font-medium mt-3">
                Eng yaxshi mijozlar uchun eng yaxshi xizmatlar.
              </h1>
              <img src={testimonial} alt="testimonial" />
            </div>
            <div className="w-2/4 flex flex-col gap-5">
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white py-10 px-20 text-2xl font-medium
                text-black/40 shadow-xl rounded-xl hover:scale-103
                transition-transform transform duration-300"
              >
                {" "}
                Ishonchlilik
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white py-10 px-20 text-2xl font-medium text-black/40 shadow-xl rounded-xl hover:scale-103 transition-transform transform duration-300"
              >
                Yuqori darajada xavfsiz
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white py-10 px-20 text-2xl font-medium text-black/40 shadow-xl rounded-xl hover:scale-103 transition-transform transform duration-300"
              >
                Vaqt bilan sinalgan sifat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="relative">
        <img
          src={medicine}
          alt="bg1"
          className="w-full md:h-[650px] object-cover"
        />
        <div className="absolute w-full md:h-[650px] top-0 left-0 right-0 bg-blue-800/70 flex flex-col items-center justify-center align-middle gap-y-6">
          <h1
            data-aos="zoom-in"
            className="text-6xl text-center font-bold md:w-[50%] leading-16 text-white"
          >
            Bizning Hamkorlar
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white/90 text-lg md:w-[50%] mx-auto text-center"
          >
            Biz eng sifatli, xavfsiz va ishonchli xizmat ko’rsatganimiz uchun
            hamkorlarimiz bizdan mamnunlar
          </p>
          <div className="w-8/10 mx-auto mt-5">{<Swipers />}</div>
        </div>
      </section>
    </div>
  );
}

export default Main;
