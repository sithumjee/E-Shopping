import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
});

const shopModel =
  mongoose.models.shopProducts || mongoose.model("shopProducts", ProductSchema);

export default shopModel;
