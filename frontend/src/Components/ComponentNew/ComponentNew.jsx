import React, { useContext } from "react";
import "./ComponentNew.css";
import Items from "../Items/Items"; // Importing the Items component
import { ShopContext } from "../../Context/ShopContent";

const ComponentNew = () => {
  const { product_list } = useContext(ShopContext);

  // Get the last 10 items from the product_list
  const lastTenItems = product_list.slice(-10);

  return (
    <div className="newComponent">
      <h1>LATEST ARRIVALS</h1> {/* Heading for the latest arrivals */}
      <hr /> {/* Horizontal line */}
      <div className="new-item">
        {lastTenItems.map((item, i) => {
          // Mapping through the last 10 items
          return (
            <Items
              key={i} // Unique key for each item
              id={item._id} // Item ID
              name={item.name} // Item name
              image={item.image} // Item image
              price={item.price} // New price of the item
              // Old price of the  item
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComponentNew;
