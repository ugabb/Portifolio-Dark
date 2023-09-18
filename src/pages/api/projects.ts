import { connectToDB } from "@/utils/database";
import type { NextApiRequest, NextApiResponse } from 'next'

export const GET = async (req: NextApiRequest) => {
  try {
    await connectToDB()

  } catch (error) {

  }
}