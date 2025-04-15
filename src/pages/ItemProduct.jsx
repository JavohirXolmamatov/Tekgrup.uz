import { NavLink, useParams } from "react-router";
import { Carplatu, medicine } from "../assets";
import product from "../components/products.json";
import ItemProductCard from "../components/ItemProductCard";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ItemProduct() {
  const [productLink, setProductLink] = useState([]);
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (id && product[id]) {
      setProductLink(product[id]); // masalan: product["medical"]
    } else {
      setProductLink([]); // noto'g'ri id bo'lsa bo'sh array
    }
  }, [id]);

  const handleSelected = (e) => {
    const value = e.target.value;
    const originalProducts = product[id] || [];

    if (value === "all") {
      setProductLink(originalProducts);
    } else if (value === "mashhur") {
      const sorted = [...originalProducts].sort((a, b) => b.rating - a.rating); // katta → kichik
      setProductLink(sorted);
    } else if (value === "arzon") {
      const sorted = [...originalProducts].sort((a, b) => a.price - b.price); // kichik → katta
      setProductLink(sorted);
    } else if (value === "qimmat") {
      const sorted = [...originalProducts].sort((a, b) => b.price - a.price); // katta → kichik
      setProductLink(sorted);
    }
  };

  return (
    <div className="w-full h-auto py-20 ">
      <div className="w-8/10 mx-auto flex flex-row gap-5 items-center justify-end mb-10">
        <select
          onChange={handleSelected}
          className="border-1 px-2 py-2 rounded-md"
        >
          <option value="all">{t("products.default_sort")}</option>
          <option value="mashhur">{t("products.sort_by_popularity")}</option>
          <option value="arzon">{t("products.sort_price_low_to_high")}</option>
          <option value="qimmat">{t("products.sort_price_high_to_low")}</option>
        </select>
      </div>
      <div className="flex w-9/10 md:flex-row flex-col  mx-auto items-center gap-10 flex-wrap">
        {productLink.map((item, index) => (
          <ItemProductCard key={index} item={item} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default ItemProduct;
