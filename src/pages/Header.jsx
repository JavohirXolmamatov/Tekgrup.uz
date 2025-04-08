import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#009F7F] transition duration-200 ease-in-out"
      : "hover:text-[#009F7F] transition duration-200 ease-in-out";

  return (
    <div className="w-full shadow-md">
      <div className="bg-blue-800 py-2">
        <div className="  flex items-center md:justify-end justify-center gap-10 text-white w-9/10 mx-auto text-sm font-medium">
          <a href="#" className="">
            info.uz@tekgrup.net
          </a>
          <span className="">+998 55 515 04 15</span>
        </div>
      </div>
      <div className="w-full bg-blue-500/5">
        <div className="py-3 w-9/10 mx-auto flex flex-row items-center justify-between">
          <img
            src="/public/TEK-GRUP_logo-2.png"
            alt="/public/TEK-GRUP_logo-2.png"
            className="h-[100px] w-[200px]"
          />
          <nav className="relative ">
            {/* mobile button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* desctop menu */}
            <ul className="hidden md:flex gap-x-8 text-md font-medium ">
              <li className="hover:text-[#009F7F] transition duration-200 ease-in-out">
                <NavLink to={"/"} className={getLinkClass}>
                  Main
                </NavLink>
              </li>
              <li className="hover:text-[#009F7F] transition duration-200 ease-in-out">
                <NavLink to="/news" className={getLinkClass}>
                  News
                </NavLink>
              </li>
              <li className="hover:text-[#009F7F] transition duration-200 ease-in-out">
                <NavLink to={"/product"} className={getLinkClass}>
                  Products
                </NavLink>
              </li>
              <li className="hover:text-[#009F7F] transition duration-200 ease-in-out">
                <NavLink to={"/about"} className={getLinkClass}>
                  About
                </NavLink>
              </li>
              <li className="hover:text-[#009F7F] transition duration-200 ease-in-out">
                <NavLink to={"/contact"} className={getLinkClass}>
                  Contact
                </NavLink>
              </li>
              <select name="" id="" className="">
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </ul>

            {/* Mobile menu */}
            {menuOpen && (
              <div
                className={`absolute md:hidden bg-gray-200 top-[76px] w-[150px] ${
                  menuOpen
                    ? "translate-x-0 -right-5 "
                    : "translate-x-full -right-[250px] "
                } h-[300px] transition duration-300 ease-in-out`}
              >
                <ul
                  className="flex flex-col gap-4 md:mt-4 text-start w-fit p-5 m-0"
                  // onClick={() => setMenuOpen(!menuOpen)}
                >
                  <li className="">
                    <NavLink to={"/"} className={getLinkClass}>
                      Main
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/news" className={getLinkClass}>
                      News
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to={"/product"} className={getLinkClass}>
                      Products
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to={"/about"} className={getLinkClass}>
                      About
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to={"/contact"} className={getLinkClass}>
                      Contact
                    </NavLink>
                  </li>
                  <select name="" id="" className="">
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                  </select>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
