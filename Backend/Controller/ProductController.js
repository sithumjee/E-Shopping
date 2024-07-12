import shopModel from "../Models/ProductModel.js";
import fs from "fs";

//add product item

const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const Product = new shopModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await Product.save();
    res.json({ success: true, message: "product Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all product list

const listProduct = async (req, res) => {
  try {
    const products = await shopModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove product item

const removeProduct = async (req, res) => {
  try {
    const product = await shopModel.findById(req.body._id);
    fs.unlink(`../upload/${product.image}`, () => {});

    await shopModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

export { addProduct, listProduct, removeProduct };
