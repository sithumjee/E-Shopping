import React, { useContext } from "react";
import "./Popular.css";
import data_products from "../Assets/data";
import Items from "../Items/Items";
import { ShopContext } from "../../Context/ShopContent";

const Popular = () => {
  const { product_list } = useContext(ShopContext);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {product_list.map((item, i) => {
          return (
            <Items
              key={i}
              id={item._id}
              name={item.name}
              image={item.image}
              new_price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
