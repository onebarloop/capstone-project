import mongoose from "mongoose";
import type { ArtistInterface } from "../../lib/ArtistClass";

const { Schema } = mongoose;

const artistSchema = new Schema<ArtistInterface>({
  artistName: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  location: { type: String, required: true },
  slug: { type: String, required: true },
  tattoos: { type: [String], required: true },
});

const Artist =
  mongoose.models.Artist ||
  mongoose.model<ArtistInterface>("Artist", artistSchema);

export default Artist;
