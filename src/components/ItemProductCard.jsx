import React from "react";
import { Carplatu } from "../assets";
import { NavLink } from "react-router";

function ItemProductCard({ item, price }) {
  return (
    <div
      className="h-[420px] md:w-[31%] shadow-2xl rounded-2xl overflow-hidden relative"
      key={item.id}
      id={item.id}
    >
      <img
        src={Carplatu}
        alt="drug"
        className="h-[400px] w-full rounded-2xl object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bg-black/30 h-full w-full"></div>
      <div className="absolute bottom-3 w-full h-auto px-10 flex flex-col gap-2 items-center justify-between">
        <div className="flex items-center align-middle justify-center gap-8 w-full">
          <h1 className=" text-center text-xl font-bold text-black/70">
            {item.name}
          </h1>
          <span className="text-sm text-black/70 font-bold">{price} So'm</span>
        </div>
        <NavLink
          to="/"
          className="text-white text-md font-bold bg-green-500 py-1 px-6 rounded-md hover:scale-[105%] transition-transform transform duration-300"
        >
          Batafsil
        </NavLink>
      </div>
    </div>
  );
}

export default ItemProductCard;
