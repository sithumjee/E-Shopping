import React from "react";
import { assets } from "../../assets/assests";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddProduct.css";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "men",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(
      `http://localhost:5000/api/product/additem`,
      formData
    );
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "men",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="addproduct">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="addproduct-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.uploadArea}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="addproduct-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Enter"
          />
        </div>
        <div className="addproduct-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            name="description"
            placeholder="Enter"
            required
          ></textarea>
        </div>

        <div className="addproduct-price-category ">
          <div className="addproduct-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="men"> men</option>
              <option value="women"> women</option>
              <option value="kids"> kids</option>
            </select>
          </div>

          <div className="addproduct-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="Rs"
            />
          </div>
        </div>

        <button type="submit" className="addproduct-button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
