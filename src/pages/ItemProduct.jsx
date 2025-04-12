import { NavLink, useParams } from "react-router";
import { Carplatu } from "../assets";

function ItemProduct() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="w-full h-auto py-20 ">
      <div className="flex w-9/10 md:flex-row flex-col  mx-auto items-center gap-10 flex-wrap">
        <div className="h-[420px] md:w-[31%] shadow-2xl rounded-2xl overflow-hidden relative">
          <img
            src={Carplatu}
            alt="drug"
            className="h-[400px] w-full rounded-2xl object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bg-black/30 h-full w-full"></div>
          <div className="absolute bottom-3 w-full h-auto px-10 flex flex-col gap-2 items-center justify-between">
            <h1 className=" text-center text-xl font-bold text-white/80">
              Bost your conversion rate
            </h1>
            <NavLink
              to="/"
              className="text-white text-md font-bold bg-green-500 py-1 px-6 rounded-md hover:scale-[105%] transition-transform transform duration-300"
            >
              Batafsil
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
