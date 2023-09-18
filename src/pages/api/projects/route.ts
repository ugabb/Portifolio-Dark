// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import projects from '@/projects'
import { IProjects } from '@/IProjects'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProjects>
) {
  res.status(200).json(projects)
}
