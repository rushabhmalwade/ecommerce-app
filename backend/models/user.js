import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  //creating schema
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      defalut: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema); //defining
export default User;
