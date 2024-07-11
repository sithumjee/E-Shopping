import React, { useContext } from "react";
import "./Items.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContent";

function Items({ id, name, description, image, price, category }) {
  const { url } = useContext(ShopContext);
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={url + "/images/" + image}
          alt=""
        />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">Rs {price}</div>
      </div>
    </div>
  );
}

export default Items;
