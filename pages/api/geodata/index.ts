import type { NextApiRequest, NextApiResponse } from 'next';
import fetchGeoData from '../../../lib/fetchGeoData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const APIKEY = process.env.GEOAPI_KEY;
  if (req.method === 'POST') {
    try {
      const geoData = await fetchGeoData({ ...req.body, APIKEY });
      res.status(200).json(geoData);
    } catch (error) {
      res.status(401).json(error);
    }
  }
}
