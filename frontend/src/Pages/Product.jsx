import React, { useContext } from "react";
import "./CSS/Product.css";
import Footer from "../Components/Footer/Footer";
import { ShopContext } from "../Context/ShopContent"; // Ensure the correct path
import { useParams } from "react-router-dom";
import GetProductId from "../Components/GetProductId/GetProductId";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

export default function Product() {
  const { product_list } = useContext(ShopContext);
  const { productId } = useParams();
  const product = product_list.find((item) => item._id === productId);

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="main-product">
      <GetProductId product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct product={product} />
      <Footer />
    </div>
  );
}
