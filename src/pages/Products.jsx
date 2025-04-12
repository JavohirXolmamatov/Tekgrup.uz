import React from "react";
import { buyum, cosmetic, drug } from "../assets";
import { NavLink } from "react-router";

function Products() {
  return (
    <div className="w-full py-20 ">
      <div className="flex w-9/10 md:flex-row flex-col  mx-auto items-center justify-between gap-10">
        <NavLink to={"item/1"}>
          <div className="shadow-2xl rounded-2xl overflow-hidden relative group">
            <img
              src={drug}
              alt="drug"
              className="h-[400px] w-auto rounded-2xl"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 w-full h-[400px] hidden group-hover:flex items-center justify-center text-white text-xl font-bold ">
              Dori mahsulotlari
            </div>
          </div>
        </NavLink>
        <NavLink to={"item/2"}>
          <div className="shadow-2xl rounded-2xl overflow-hidden relative group">
            <img
              src={cosmetic}
              alt="drug"
              className="h-[400px] w-auto rounded-2xl"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 w-full h-[400px] hidden group-hover:flex items-center justify-center text-white text-xl font-bold ">
              Kosmetika mahsulotlari
            </div>
          </div>
        </NavLink>
        <NavLink to={"item/3"}>
          <div className="shadow-2xl rounded-2xl overflow-hidden relative group">
            <img
              src={buyum}
              alt="drug"
              className="h-[400px] w-auto rounded-2xl"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 w-full h-[400px] hidden group-hover:flex items-center justify-center text-white text-xl font-bold ">
              Tibbiy buyumlar
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Products;
