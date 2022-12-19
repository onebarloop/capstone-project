import mongoose from "mongoose";
import { default as ArtistModel } from "../../lib/ArtistClass";

const { Schema } = mongoose;

const artistSchema = new Schema<ArtistModel>({
  artistName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  location: { type: String, required: true },
  slug: { type: String, required: true },
  tattoos: { type: [String], required: true },
  _id: { type: String, required: true },
});

const Artist =
  mongoose.models.Artist || mongoose.model<ArtistModel>("Artist", artistSchema);

export default Artist;

// const childSchema = new Schema({
//   street: { type: String },
//   country: { type: String },
// });

// const questionSchema = new Schema({
//   text: { type: String, required: true },
//   name: { type: String, required: true },
//   adress: [childSchema],
// });
