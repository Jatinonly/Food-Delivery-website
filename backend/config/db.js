import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://jatinpilpia123:Jatin2003@cluster0.2bdahfn.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
