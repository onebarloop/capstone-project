// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
import dbConnect from "../../db/dbConnect";
import Artist from "../../db/models/Artist";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const artists = await Artist.find();

    // const questionArray = questions.map((question) => {
    //   return { name: question.name, text: question.text, id: question._id };
    // });
    res.status(200).json(artists);
  }
}
