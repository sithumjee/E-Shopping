import React, { useContext } from "react";
import "./Popular.css";
import data_products from "../Assets/data";
import Items from "../Items/Items";
import { ShopContext } from "../../Context/ShopContent";

const Popular = () => {
  const { product_list } = useContext(ShopContext);
  const firstEightItems = product_list.slice(0, 8);
  return (
    <div className="popular">
      <h1>POPULAR</h1>
      <hr />
      <div className="popular-item">
        {firstEightItems.map((item, i) => {
          return (
            <Items
              key={i}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
