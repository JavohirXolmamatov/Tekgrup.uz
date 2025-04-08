import React from "react";
import { konferensiya, male, medicine2, sertificate, trening } from "../assets";

function News() {
  return (
    <div className="w-full pb-10">
      <div className="w-full mb-10">
        <img
          src={medicine2}
          alt="medicine2"
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="w-9/10 mx-auto mb-10 text-black/70 flex flex-wrap gap-8 justify-between">
        <div className="w-[30%]">
          <img
            src={sertificate}
            alt="sertificate"
            className="w-[400px] h-[250px] object-cover mb-4"
          />
          <h1 className="text-xl font-medium hover:text-[#009F7F] transition-all duration-400">
            Tek Grup Sağlık Hizmetleri» ISO 9001:2015 Sertifikatini Qo‘lga
            Kiritdi!
          </h1>
          <span> Mart 13, 2025</span>
          <p className="my-3">
            Biz faxr bilan e’lon qilamiz: «Tek Grup Sağlık Hizmetleri»
            kompaniyasi 2025-yil fevral oyida ISO 9001:2015 sifat menejmenti
            tizimi sertifikatiga ega bo‘ldi! Ushbu sertifikat kompaniyamizning
            yuqori
          </p>
          <a
            href="#"
            className="hover:text-[#009F7F] transition-all duration-400 font-medium"
          >
            Ko'proq o'qish
          </a>
        </div>
        <div className="w-[30%]">
          <img
            src={trening}
            alt="sertificate"
            className="w-[400px] h-[250px] object-cover mb-4"
          />
          <h1 className="text-xl font-medium hover:text-[#009F7F] transition-all duration-400">
            Tek Grup Sağlık Hizmetleri» ISO 9001:2015 Sertifikatini Qo‘lga
            Kiritdi!
          </h1>
          <span> Mart 13, 2025</span>
          <p className="my-3">
            Biz faxr bilan e’lon qilamiz: «Tek Grup Sağlık Hizmetleri»
            kompaniyasi 2025-yil fevral oyida ISO 9001:2015 sifat menejmenti
            tizimi sertifikatiga ega bo‘ldi! Ushbu sertifikat kompaniyamizning
            yuqori
          </p>
          <a
            href="#"
            className="hover:text-[#009F7F] transition-all duration-400 font-medium"
          >
            Ko'proq o'qish
          </a>
        </div>
        <div className="w-[30%]">
          <img
            src={konferensiya}
            alt="sertificate"
            className="w-[400px] h-[250px] object-cover mb-4"
          />
          <h1 className="text-xl font-medium hover:text-[#009F7F] transition-all duration-400">
            Tek Grup Sağlık Hizmetleri» ISO 9001:2015 Sertifikatini Qo‘lga
            Kiritdi!
          </h1>
          <span> Mart 13, 2025</span>
          <p className="my-3">
            Biz faxr bilan e’lon qilamiz: «Tek Grup Sağlık Hizmetleri»
            kompaniyasi 2025-yil fevral oyida ISO 9001:2015 sifat menejmenti
            tizimi sertifikatiga ega bo‘ldi! Ushbu sertifikat kompaniyamizning
            yuqori
          </p>
          <a
            href="#"
            className="hover:text-[#009F7F] transition-all duration-400 font-medium"
          >
            Ko'proq o'qish
          </a>
        </div>
        <div className="w-[30%]">
          <img
            src={male}
            alt="sertificate"
            className="w-[400px] h-[250px] object-cover mb-4"
          />
          <h1 className="text-xl font-medium hover:text-[#009F7F] transition-all duration-400">
            Tek Grup Sağlık Hizmetleri» ISO 9001:2015 Sertifikatini Qo‘lga
            Kiritdi!
          </h1>
          <span> Mart 13, 2025</span>
          <p className="my-3">
            Biz faxr bilan e’lon qilamiz: «Tek Grup Sağlık Hizmetleri»
            kompaniyasi 2025-yil fevral oyida ISO 9001:2015 sifat menejmenti
            tizimi sertifikatiga ega bo‘ldi! Ushbu sertifikat kompaniyamizning
            yuqori
          </p>
          <a
            href="#"
            className="hover:text-[#009F7F] transition-all duration-400 font-medium"
          >
            Ko'proq o'qish
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
