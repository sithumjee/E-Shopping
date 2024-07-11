import React, { useContext } from "react";
import "./CardItems.css";
import { ShopContext } from "../../Context/ShopContent";
import remove_icon from "../Assets/cart_cross_icon.png";

const CardItems = () => {
  const {
    addToCart,
    url,
    cartItems,
    product_list,
    removeFromCart,
    TotalCartAmount,
  } = useContext(ShopContext);
  return (
    <div className="carditems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {product_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={item._id}>
              <div className="carditems-format">
                <img
                  className="carditemImg"
                  src={`${url}/images/${item.image}`}
                  alt="Product"
                />
                <p>{item.name}</p>
                <p>Rs {item.price}</p>
                <button className="carditem-quantity">
                  {cartItems[item._id]}
                </button>
                <p className="totalprice">
                  Rs {item.price * cartItems[item._id]}
                </p>
                <img
                  className="remove-icon"
                  src={remove_icon}
                  alt="Remove"
                  onClick={() => {
                    removeFromCart(item._id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // Ensure a value is always returned from the map function
      })}

      <div className="cardItems-down">
        <hr />
        <hr />
        <div className="cardItems-total">
          <h1>CART TOTAL</h1>
          <div>
            <div className="cardItems-total-item">
              <p>SubTotal</p>
              <p>Rs {TotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cardItems-total-item">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="cardItems-total-item">
              <h3>Total</h3>
              <h3>Rs {TotalCartAmount()}</h3>
            </div>
          </div>

          <button>Proceed to Checkout</button>
        </div>
        <div className="cartItems-promocode">
          <p>If you have a promo code,Enter it here</p>
          <div className="cardItems-promobox">
            <input type="text" placeholder="Enter Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
