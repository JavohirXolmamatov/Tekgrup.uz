import React from "react";
import { konferensiya, male, medicine2, sertificate, trening } from "../assets";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation();
  return (
    <div className="w-full pb-10">
      <div className="w-full mb-10 relative">
        <img
          src={medicine2}
          alt="medicine2"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-black/30 flex justify-center items-center align-middle">
          <h1 data-aos="zoom-in-up" className="text-6xl text-white font-bold">
            {t("news.title")}
          </h1>
        </div>
      </div>
      <div className="w-9/10 mx-auto mb-10 text-black/70 flex md:flex-row flex-col flex-wrap gap-8 justify-between">
        <div className="md:w-[30%] md:h-[530px] h-[600px] w-full shadow-xl p-4 relative">
          <img
            src={sertificate}
            alt="sertificate"
            className="w-full h-[250px] object-cover mb-4"
          />
          <h1 className="text-xl font-medium hover:text-[#009F7F] transition-all duration-400">
            {t("news.cards.0.title")}
          </h1>
          <span>{t("news.cards.0.date")}</span>
          <p className="my-3">{t("news.cards.0.description")}</p>
          <NavLink
            to="/news/item/1"
            className="hover:text-[#009F7F] absolute bottom-5 transition-all duration-400 font-medium"
          >
            {t("news.cards.0.button")}
          </NavLink>
        </div>
        <div className="md:w-[30%] md:h-[530px] h-[600px] w-full shadow-xl p-4 relative">
          <img
            src={trening}
            alt="sertificate"
            className="w-full h-[250px] object-cover mb-4"
          />
          <h1 className="text-xl font-medium hover:text-[#009F7F] transition-all duration-400">
            {t("news.cards.1.title")}
          </h1>
          <span>{t("news.cards.1.date")}</span>
          <p className="my-3">{t("news.cards.1.description")}</p>
          <NavLink
            to="/news/item/2"
            className="hover:text-[#009F7F] absolute bottom-5 transition-all duration-400 font-medium"
          >
            {t("news.cards.0.button")}
          </NavLink>
        </div>
        <div className="md:w-[30%] md:h-[530px] h-[600px] w-full shadow-xl p-4 relative">
          <img
            src={konferensiya}
            alt="sertificate"
            className="w-full h-[250px] object-cover mb-4"
          />
          <h1 className="text-xl font-medium hover:text-[#009F7F] transition-all duration-400">
            {t("news.cards.2.title")}
          </h1>
          <span>{t("news.cards.2.date")}</span>
          <p className="my-3">{t("news.cards.2.description")}</p>
          <NavLink
            to="/news/item/3"
            className="hover:text-[#009F7F] absolute bottom-5 transition-all duration-400 font-medium"
          >
            {t("news.cards.0.button")}
          </NavLink>
        </div>
        <div className="md:w-[30%] md:h-[530px] h-[600px] w-full shadow-xl p-4 relative">
          <img
            src={male}
            alt="sertificate"
            className="w-full h-[250px] object-cover mb-4"
          />
          <h1 className="text-xl font-medium hover:text-[#009F7F] transition-all duration-400">
            {t("news.cards.3.title")}
          </h1>
          <span>{t("news.cards.3.date")}</span>
          <p className="my-3">{t("news.cards.3.description")}</p>
          <NavLink
            to="/news/item/4"
            className="hover:text-[#009F7F] absolute bottom-5 transition-all duration-400 font-medium"
          >
            {t("news.cards.0.button")}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default News;
