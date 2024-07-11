import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [productData, setProductData] = useState({
    name: "",
    image: null,
    category: "",
    new_price: "",
    old_price: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("image", productData.image);
    formData.append("category", productData.category);
    formData.append("new_price", productData.new_price);
    formData.append("old_price", productData.old_price);

    try {
      const response = await axios.post(
        "http://localhost:4000/addProduct",
        formData
      );
      console.log(response.data);
      // Reset the form after successful submission
      setProductData({
        name: "",
        image: null,
        category: "",
        new_price: "",
        old_price: "",
      });
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Product Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Product Category:</label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
          </select>
        </div>
        <div>
          <label htmlFor="new_price">New Price:</label>
          <input
            type="number"
            id="new_price"
            name="new_price"
            value={productData.new_price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="old_price">Old Price:</label>
          <input
            type="number"
            id="old_price"
            name="old_price"
            value={productData.old_price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPanel;
