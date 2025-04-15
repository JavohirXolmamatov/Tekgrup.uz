import React from "react";
import { Map } from "../components";
import { useTranslation } from "react-i18next";
import { logo } from "../assets";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col w-9/10 mx-auto gap-10 text-black/50">
        <div className="md:w-1/4 w-full">
          <img src={logo} alt="logo" className="w-[250px]" />
          <span className="text-md font-bold block pt-2">
            {t("footer.company_name")}
          </span>
        </div>
        <div className="md:w-1/4 w-full">
          <h1 className="text-xl font-bold text-black/70">
            {t("footer.contact_heading")}
          </h1>
          <p className="py-1">{t("footer.address")}</p>
          <p className="py-1">info.uz@tekgrup.net</p>
          <p className="py-1">+998 55 515 04 15</p>
        </div>
        <div className="md:w-2/4 w-full">
          <Map className={"md:w-[450px] mx-auto w-auto h-[250px] z-0"} />
        </div>
      </div>
      <hr className="w-9/10 mx-auto block my-10 text-black/50" />
      <p className="w-9/10 mx-auto text-black/50 text-md text-center md:text-start mb-2">
        {t("footer.rights_reserved")}
      </p>
    </div>
  );
}

export default Footer;
