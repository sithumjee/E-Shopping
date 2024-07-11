import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:5000";
  const [product_list, setProductList] = useState([]);

  const addToCart = async (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    }
  };

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId] === 1) {
      setCartItems((prev) => {
        const newCartItems = { ...prev };
        delete newCartItems[itemId];
        return newCartItems;
      });
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const TotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = product_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += parseFloat(itemInfo.price) * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchProductList = async () => {
    const response = await axios.get(url + "/api/product/listitem");
    setProductList(response.data.data);
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    TotalCartAmount,
    product_list,
    url,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
