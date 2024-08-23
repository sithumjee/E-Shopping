import React, { useContext, useEffect } from "react";
import "./CardItems.css";
import { ShopContext } from "../../Context/ShopContent";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";

const CardItems = () => {
  const {
    addToCart,
    token,
    url,
    cartItems,
    product_list,
    removeFromCart,
    TotalCartAmount,
    clearCart,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert("please login first");
      navigate("/cart");
    } else if (TotalCartAmount() === 0) {
      alert("please add items first");
      navigate("/");
    }
  }, [token]);

  const handleCheckout = () => {
    if (token && TotalCartAmount() > 0) {
      alert("Order is set up!");
      clearCart();
    } else if (!token) {
      alert("please login first");
      navigate("/");
    } else {
      alert("please add items first");
      navigate("/");
    }
  };

  return (
    <div className="carditems">
      <div className="cardItems-container">
        <div className="cardItems-header">
          <h1>Your Cart</h1>
        </div>
        <div className="cardItems-content">
          {product_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="cardItems-item">
                  <div className="cardItems-item-image">
                    <img
                      src={`${url}/images/${item.image}`}
                      alt="Product"
                      className="carditemImg"
                    />
                  </div>
                  <div className="cardItems-item-details">
                    <h3>{item.name}</h3>
                    <p>Rs {item.price}</p>
                    <div className="cardItems-item-quantity">
                      <p>Quantity: {cartItems[item._id]}</p>
                      <img
                        className="remove-icon"
                        src={remove_icon}
                        alt="Remove"
                        onClick={() => {
                          removeFromCart(item._id);
                        }}
                      />
                    </div>
                    <p className="totalprice">
                      Total: Rs {item.price * cartItems[item._id]}
                    </p>
                  </div>
                </div>
              );
            }
            return null; // Ensure a value is always returned from the map function
          })}
        </div>
      </div>

      <div className="cardItems-summary">
        <div className="cardItems-total">
          <h2>Cart Summary</h2>
          <div className="cardItems-total-item">
            <p>Subtotal</p>
            <p>Rs {TotalCartAmount()}</p>
          </div>
          <div className="cardItems-total-item">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="cardItems-total-item">
            <h3>Total</h3>
            <h3>Rs {TotalCartAmount()}</h3>
          </div>
          <button type="submit" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
        <div className="cardItems-promo">
          <h3>Have a promo code?</h3>
          <div className="cardItems-promo-input">
            <input type="text" placeholder="Enter Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
