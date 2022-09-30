import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const User = model("User", userSchema);

export default User;
