import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import axios from "axios";
import { toast } from "react-toastify";

const ListProduct = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/product/listitem`
      );

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching  list");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching  list");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/product/removeitem`,
        {
          _id: foodId,
        }
      );
      if (response.data.success) {
        toast.success("Food removed successfully");
        await fetchList();
      } else {
        toast.error("Error removing food");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error removing food");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Product List</p>

      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img
                src={`http://localhost:5000/images/${item.image}`}
                alt={item.name}
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
