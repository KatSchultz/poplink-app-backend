// Setup schema and model for link collection
import { model, Schema } from "mongoose";
//import link type to use with mongoose
import { Profile } from "../types/profile.types";

//2 Step Process

// 1. Setup Schema

const profileSchema = new Schema<Profile>(
  {
    userId: { type: String, required: true },
    profileUsername: { type: String, required: true, unique: true },
    profileName: { type: String, required: true },
    profileDescription: { type: String },
    profilePhotoUrl: { type: String },
  },
  { timestamps: true }
  // { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Alternative method for setting the createAt and updatedAt field names
);

// 2. Create the model from the Schema

export const profileModel = model<Profile>("Profile", profileSchema);
