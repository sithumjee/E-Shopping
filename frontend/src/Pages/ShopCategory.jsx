import React, { useContext } from "react";
import Footer from "../Components/Footer/Footer";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContent";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

export default function ShopCategory(props) {
  const { product_list } = useContext(ShopContext);
  return (
    <div className="mainCategory">
      <div>
        <img className="banner-image" src={props.banner} alt="" />
      </div>

      <div className="shopcategory-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-product">
        {product_list.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                className="shopcategory-item"
              />
            );
          }

          return null;
        })}
      </div>

      <div className="loadMore">
        <button>Load More</button>
      </div>

      <Footer />
    </div>
  );
}
