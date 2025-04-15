import React, { useEffect, useState } from "react";
import Products from "../components/products.json";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

function ProductTitle() {
  const [productDetail, setProductDetail] = useState(null);
  const { category, productId } = useParams(); // masalan: category = "medical", productId = "0"
  const { t, i18n } = useTranslation();
  const lan = i18n.language;

  useEffect(() => {
    if (category && productId && Products[category]) {
      const item = Products[category][productId - 1];
      setProductDetail(item);
    } else {
      setProductDetail(null);
    }
  }, [category, productId]);

  if (!productDetail) {
    return <div>{t("products.product_not_found")}</div>;
  }

  const similarProducts = Products[category]?.filter(
    (item) => String(item.id) !== String(productId)
  );

  return (
    <div className="w-full">
      <div className="w-8/10 mx-auto flex md:flex-row flex-col items-center justify-center align-middle my-20 py-10">
        <div className="md:w-1/2 w-full">
          <img
            src={productDetail.img}
            alt={productDetail.img}
            className="w-[500px] h-[300px] object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full text-black/80 flex flex-col gap-3">
          <h1 className="md:text-6xl text-3xl font-bold my-3 ">
            {productDetail.title}
          </h1>
          <span className="md:text-2xl ">
            {t("products.section")}: {productDetail.category}
          </span>
          <p className="text-2xl">
            {" "}
            {t("products.description")}: {productDetail[`description_${lan}`]}
          </p>
          <p className="text-2xl">
            {" "}
            {t("products.usage")}: {productDetail[`body_${lan}`]}
          </p>
          <p className="text-2xl">
            {t("products.price")}: {productDetail.price}
          </p>
        </div>
      </div>
      <div className="w-8/10 mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          {t("products.similar_products")}
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 px-4">
          {similarProducts.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow text-center relative h-[350px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="text-xl font-semibold">{item[`title_${lan}`]}</h3>
              <p className="text-gray-600">{item.price} so‘m</p>
              <a
                href={`${item.id}`}
                className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 absolute bottom-5 left-[35%]"
              >
                {t("products.details")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductTitle;
