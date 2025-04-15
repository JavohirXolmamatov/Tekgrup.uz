import React from "react";
import { Carplatu } from "../assets";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

function ItemProductCard({ item, price }) {
  const { t, i18n } = useTranslation();
  const lan = i18n.language;

  return (
    <div
      className="h-[420px] md:w-[31%] shadow-2xl rounded-2xl overflow-hidden relative"
      key={item.id}
      id={item.id}
    >
      <img
        src={item.img}
        alt="drug"
        className="h-[400px] w-full rounded-2xl object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bg-black/30 h-full w-full"></div>
      <div className="absolute bottom-3 w-full h-auto px-10 flex flex-col gap-2 items-center justify-between">
        <div className="flex items-center align-middle justify-center gap-8 w-full">
          <h1 className=" text-center text-3xl font-bold text-white">
            {item[`title_${lan}`]}
          </h1>
        </div>
        <NavLink
          to={`${item.id}`}
          className="text-white text-xl font-bold bg-green-500 py-2 px-6 rounded-md hover:scale-[105%] transition-transform transform duration-300"
        >
          {t(`batafsil.${lan}`)}
        </NavLink>
      </div>
    </div>
  );
}

export default ItemProductCard;
