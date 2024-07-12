import React, { useContext } from "react";
import "./RelatedProduct.css";
import Items from "../Items/Items";
import { ShopContext } from "../../Context/ShopContent";

const RelatedProduct = (props) => {
  const { product } = props;
  const { product_list } = useContext(ShopContext);

  // Filter the product_list to get the related products
  const relatedProducts = product_list.filter(
    (item) => item.category === product.category && item._id !== product._id
  );

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />

      <div className="relatedproducts__container">
        {relatedProducts.map((item, i) => {
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

export default RelatedProduct;
