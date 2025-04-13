import { NavLink, useParams } from "react-router";
import { Carplatu, medicine } from "../assets";
import product from "../components/products.json";
import ItemProductCard from "../components/ItemProductCard";
import { useEffect, useState } from "react";

function ItemProduct() {
  const [productLink, setProductLink] = useState([]);
  const { id } = useParams();

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
          name=""
          id=""
          className="border-1 px-2 py-2 rounded-md"
          onChange={handleSelected}
        >
          <option value="all">Odatiy tartiblash</option>
          <option value="mashhur">Mashhurligi bo'yicha</option>
          <option value="arzon">Narx: Arzondan yo'qoriga</option>
          <option value="qimmat">Narx: Qimmatdan arzoniga</option>
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
