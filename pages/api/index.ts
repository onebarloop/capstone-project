import dbConnect from '../../db/dbConnect';
import Artist from '../../db/models/Artist';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const artists = await Artist.find();
      res.status(200).json(artists);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const newArtist = await Artist.create(data);

      res.status(201).json(newArtist);
    } catch (error) {
      res.status(401).json(error);
    }
  }
}
