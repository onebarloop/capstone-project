import dbConnect from "../../db/dbConnect";
import Artist from "../../db/models/Artist";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const artists = await Artist.find();
      res.status(200).json(artists);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
