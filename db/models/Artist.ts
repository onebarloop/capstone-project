import mongoose from "mongoose";
import type { ArtistInterface } from "../../lib/ArtistClass";

const { Schema } = mongoose;

const locationSchema = new Schema({
  postalCode: { type: Number, required: true },
  city: { type: String, required: true },
  streetname: { type: String, required: true },
  number: { type: Number, required: true },
});

const artistSchema = new Schema<ArtistInterface>({
  artistName: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  location: locationSchema,
  slug: { type: String, required: true },
  tattoos: { type: [String], required: true },
});

const Artist =
  mongoose.models.Artist ||
  mongoose.model<ArtistInterface>("Artist", artistSchema);

export default Artist;
