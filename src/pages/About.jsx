import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <section className="w-full relative">
        <img
          src={about1}
          alt="about1"
          className="w-full md:h-[350px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full flex flex-col gap-5 justify-center items-center bg-black/30">
          <h1
            data-aos="fade-up"
            className="md:text-6xl text-3xl font-bold text-white"
          >
            {t("about.heroTitle")}
          </h1>
          <p
            data-aos="fade-down"
            className="md:text-3xl text-xl text-white font-medium"
          >
            {t("about.heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="md:w-8/10 w-9/10 mx-auto md:my-30 my-5 flex md:flex-row flex-col gap-5 justify-between items-center align-middle">
          <div className="md:w-1/2 w-full pr-5">
            <span className="text-md font-medium uppercase text-blue-300">
              {t("about.whoWeAre")}
            </span>
            <h1 className="md:text-5xl text-3xl font-bold text-black/90 mt-5">
              {t("about.whoWeAreTitle")}
            </h1>
            <p className="mt-5 text-md text-[#573131]">
              {t("about.whoWeAreText")}
            </p>
          </div>
          <div className="md:w-1/2 w-full">
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
        <div className="absolute w-full md:h-[550px] h-[400px] top-0 left-0 right-0 bg-black/50 flex flex-col items-center justify-center align-middle gap-y-6">
          <h1
            data-aos="zoom-in"
            className="md:text-5xl text-3xl text-center font-bold md:w-[55%] md:leading-16 text-white"
          >
            {t("about.whatWeDo")}
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white/90 text-lg text-center md:w-2/4 w-9/10"
          >
            {t("about.whatWeDoText")}
          </p>
          <a
            data-aos="zoom-in"
            href="#"
            className="bg-blue-500 text-white text-lg hover:bg-blue-500/80 font-medium py-3 px-8 rounded-lg"
          >
            {t("about.learnMore")}
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
            {t("about.ourServices")}
          </h1>
          <div className="flex md:flex-row flex-col gap-x-5 items-center align-middle">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="md:w-2/4 w-full"
            >
              <h1 className="md:text-5xl text-3xl font-medium mt-3 md:text-start text-center">
                {t("about.servicesTitle")}
              </h1>
              <img src={testimonial} alt="testimonial" />
            </div>
            <div className="md:w-2/4 w-full flex flex-col gap-5 flex-wrap box-border overflow-hidden">
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white md:py-10 py-5 md:px-20 px-5 md:text-2xl text-xl font-medium
                text-black/40 shadow-xl rounded-xl hover:scale-103
                transition-transform transform duration-300"
              >
                {" "}
                {t("about.service1")}
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-white md:py-10 py-5 md:px-20 px-5 md:text-2xl text-xl font-medium text-black/40 shadow-xl rounded-xl hover:scale-103 transition-transform transform duration-300"
              >
                {t("about.service2")}
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
        <div className="absolute w-full md:h-[850px] h-[500px] top-0 left-0 right-0 bg-green-800/70 flex flex-col items-center justify-center align-middle gap-y-6">
          <h1
            data-aos="zoom-in"
            className="md:text-6xl text-4xl text-center font-bold md:w-[50%] md:leading-16 text-white"
          >
            {t("about.certificatesTitle")}
          </h1>

          <div className="w-9/10 mx-auto mt-5">{<SwiperSertificat />}</div>
        </div>
      </section>
    </div>
  );
}

export default About;
