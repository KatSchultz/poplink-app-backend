// Setup schema and model for link collection
import { model, Schema } from "mongoose";
//import link type to use with mongoose
import { User } from "../types/user.types";

//2 Step Process

// 1. Setup Schema

const userSchema = new Schema<User>(
  {
    uid: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    photoURL: { type: String },
  },
  { timestamps: true }
  // { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Alternative method for setting the createAt and updatedAt field names
);

// 2. Create the model from the Schema

export const userModel = model<User>("User", userSchema);
