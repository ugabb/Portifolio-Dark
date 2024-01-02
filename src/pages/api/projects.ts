// import GuidePlanet from "@/models/GuidesPlanet";
// import { connectToDB } from "@/utils/database";
import type { NextApiRequest, NextApiResponse } from 'next'
import run from '../../utils/mongoConnection'


export const GET = async () => {
  try {
    await run().catch(console.dir);

    // const guides = await GuidePlanet.find({})
    // return new Response(JSON.stringify(guides), { status: 200 })
  } catch (error) {
    console.error(error)
  }
}

