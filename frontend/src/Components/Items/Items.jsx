import React, { useContext } from "react";
import "./Items.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContent";

function Items({ id, name, description, image, price, category }) {
  const { url } = useContext(ShopContext);
  
  // Update the URL to point to the raw GitHub content
  const imageUrl = `https://raw.githubusercontent.com/sithumjee/E-Shopping/master/Backend/Upload/${image}`;

  return (
    <Link to={`/product/${id}`}>
      <div className="item">
        <Link to={`/product/${id}`}>
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={imageUrl}
            alt={name}
          />
        </Link>
        <p>{name}</p>
        <div className="item-prices">
          <div className="item-price-new">Rs {price}</div>
        </div>
      </div>
    </Link>
  );
}

export default Items;
