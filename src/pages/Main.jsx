import CountUp from "react-countup";
import { bg1, bg2, medicine, onko, testimonial } from "../assets/index";
import { Swipers } from "../components";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="w-full mb-10">
      {/* 1 */}
      <section className="relative">
        <img
          src={bg1}
          alt="bg1"
          className="w-full md:h-[650px] h-[400px] object-cover"
        />
        <div className="absolute w-full md:h-[650px] h-[400px] top-0 left-0 right-0 bg-blue-800/30 flex flex-col items-center justify-center align-middle gap-y-6">
          <span
            data-aos="zoom-in"
            className="uppercase bg-white py-2 px-6 rounded-2xl font-medium text-[#009F7F] tracking-widest"
          >
            {t("main.hero.badge")}
          </span>
          <h1
            data-aos="zoom-in"
            className="md:text-6xl text-3xl text-center font-bold md:w-[50%] md:leading-16 text-white"
          >
            {t("main.hero.title")}
          </h1>
          <p data-aos="zoom-in" className="text-white/90 text-lg text-center">
            {t("main.hero.description")}
          </p>
          <a
            data-aos="zoom-in"
            href="#"
            className="bg-white text-[#009F7F] text-lg hover:bg-white/90 font-medium py-3 px-8 rounded-lg"
          >
            {t("main.hero.button")}
          </a>
        </div>
      </section>

      {/* 2 */}
      <section className="w-full py-25 bg-blue-500/5">
        <div
          data-aos="zoom-in-down"
          className="md:w-8/10 w-9/10 mx-auto flex md:flex-col flex-row md:gap-10 gap-5 bg-white p-10 rounded-2xl shadow-2xl"
        >
          <div className="flex md:flex-row flex-col gap-5">
            <div
              data-aos="zoom-in-down"
              className="text-center md:w-1/3 w-full md:h-auto h-[120px]  text-[#0C4DA2]"
            >
              <h1 className="md:text-5xl text-2xl font-bold pb-2">
                {<CountUp end={8} duration={2} />}+ {t("main.stats.years")}
              </h1>
              <span className="font-medium text-md">
                {t("main.stats.in_market")}
              </span>
            </div>
            <div
              data-aos="zoom-in-down"
              className="text-center md:w-1/3 w-full md:h-auto h-[120px]  text-[#0C4DA2]"
            >
              <h1 className="md:text-5xl text-2xl font-bold pb-2">
                {<CountUp end={10} duration={2} />}+
              </h1>
              <span className="font-medium text-md">
                {t("main.stats.in_market1")}
              </span>
            </div>
            <div
              data-aos="zoom-in-down"
              className="text-center md:w-1/3 w-full md:h-auto h-[120px]  text-[#0C4DA2]"
            >
              <h1 className="md:text-5xl text-2xl font-bold pb-2">
                {<CountUp end={30} duration={2} />}+
              </h1>
              <span className="font-medium text-md">
                {t("main.stats.in_market2")}
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <div
              data-aos="zoom-in-down"
              className="text-center md:w-1/3 w-full md:h-auto h-[120px]  text-[#0C4DA2]"
            >
              <h1 className="md:text-5xl text-2xl font-bold pb-2">
                {<CountUp end={15} duration={2} />}+
              </h1>
              <span className="font-medium text-md">
                {t("main.stats.in_market3")}
              </span>
            </div>
            <div
              data-aos="zoom-in-down"
              className="text-center md:w-1/3 w-full md:h-auto h-[120px]  text-[#0C4DA2]"
            >
              <h1 className="md:text-5xl text-2xl font-bold pb-2">
                {<CountUp end={200} duration={2} />}+
              </h1>
              <span className="font-medium text-md">
                {t("main.stats.in_market4")}
              </span>
            </div>
            <div
              data-aos="zoom-in-down"
              className="text-center md:w-1/3 w-full md:h-auto h-[120px]  text-[#0C4DA2]"
            >
              <h1 className="md:text-5xl text-2xl font-bold pb-2">
                {<CountUp end={2000} duration={1} />}kv
              </h1>
              <span className="font-medium text-md">
                {t("main.stats.in_market5")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="relative">
        <img
          src={bg2}
          alt="bg1"
          className="w-full md:h-[650px] h-[400px] object-cover"
        />
        <div className="absolute w-full md:h-[650px] h-[400px] top-0 left-0 right-0 bg-blue-800/30 flex flex-col items-center justify-center align-middle gap-y-6">
          <h1
            data-aos="zoom-in"
            className="md:text-5xl text-3xl text-center font-bold md:w-[55%] md:leading-16 text-white"
          >
            {t("main.distribution.title")}
          </h1>
          <p data-aos="zoom-in" className="text-white/90 text-lg">
            {t("main.distribution.description")}
          </p>
          <a
            data-aos="zoom-in"
            href="#"
            className="bg-blue-500 text-white text-lg hover:bg-blue-500/80 font-medium py-3 px-8 rounded-lg"
          >
            {t("main.distribution.button")}
          </a>
        </div>
      </section>

      {/* 4 */}
      <section className="w-full bg-blue-500/5 h-auto py-10 box-border">
        <div className="md:w-8/10 w-9/10 mx-auto md:py-20 py-5">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="uppercase text-[#009F7F] font-medium md:text-start text-center"
          >
            {t("main.choose_us.title")}
          </h1>
          <div className="flex md:flex-row flex-col gap-x-5 items-center align-middle">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="md:w-2/4 w-full"
            >
              <h1 className="text-5xl font-medium mt-3 md:text-start text-center">
                {t("main.choose_us.subtitle")}
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
                {t("main.choose_us.points.0")}
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white py-10 px-20 text-2xl font-medium text-black/40 shadow-xl rounded-xl hover:scale-103 transition-transform transform duration-300"
              >
                {t("main.choose_us.points.1")}
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white py-10 px-20 text-2xl font-medium text-black/40 shadow-xl rounded-xl hover:scale-103 transition-transform transform duration-300"
              >
                {t("main.choose_us.points.2")}
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
          className="w-full md:h-[650px] h-[500px] object-cover"
        />
        <div className="absolute w-full md:h-[650px] top-0 left-0 right-0 bg-blue-800/70 flex flex-col items-center justify-center align-middle gap-y-6">
          <h1
            data-aos="zoom-in"
            className="text-6xl text-center font-bold md:w-[50%] leading-16 text-white"
          >
            {t("main.partners.title")}
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white/90 text-lg md:w-[50%] mx-auto text-center"
          >
            {t("main.partners.description")}
          </p>
          <div className="w-8/10 mx-auto mt-5">{<Swipers />}</div>
        </div>
      </section>
    </div>
  );
}

export default Main;
