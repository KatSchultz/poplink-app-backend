// Setup schema and model for link collection
import { model, Schema } from "mongoose";
//import link type to use with mongoose
import { Link } from "../types/link.types";

//2 Step Process

// 1. Setup Schema

const linkSchema = new Schema<Link>(
  {
    userId: { type: String, required: true },
    profileId: { type: String, required: true },
    profileUsername: { type: String, required: true },
    title: { type: String, required: true, minlength: 5, maxlength: 20 },
    url: { type: String, required: true },
  },
  { timestamps: true }
  // { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Alternative method for setting the createAt and updatedAt field names
);

// 2. Create the model from the Schema

export const linkModel = model<Link>("Link", linkSchema);
