import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sithumjeevantha:Sithum2000@cluster0.8ihmoek.mongodb.net/E_SHOPPING"
    )
    .then(() => console.log("Database Connected"));
};
