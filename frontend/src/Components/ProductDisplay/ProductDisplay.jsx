import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContent";

const ProductDisplay = (props) => {
  const { product } = props;
  const { cartItems, addToCart, removeFromCart, url } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const imageUrl = `${url}/images/${product.image}`;

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="productDisplay">
      <div className="display-left">
        <div className="productDisplay-img-list">
          <img src={imageUrl} alt="" />
          <img src={imageUrl} alt="" />
          <img src={imageUrl} alt="" />
          <img src={imageUrl} alt="" />
        </div>

        <div className="productDisplay-img">
          <img className="productDisplay-img-main" src={imageUrl} alt="" />
        </div>
      </div>

      <div className="display-right">
        <h1>
          <span>Name : </span>
          {product.name}
        </h1>
        <div className="display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="display-right-price">
          <div className="rightPriceNew">Rs {product.price}</div>
        </div>

        <div className="display-right-description">
          <p>{product.description}</p>
        </div>

        <div className="display-right-size">
          <h3>Size</h3>
          <div className="sizeList">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`sizeList-item ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            addToCart(product._id);
            console.log("add to cart");
          }}
        >
          ADD TO CART
        </button>
        <p className="displayCategory">
          <span>Category :</span>
          {product.category}
        </p>
        <p className="displayCategory">
          <span>Tags :</span>
          {product.category} , Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
