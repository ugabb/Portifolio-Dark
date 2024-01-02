// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import projects from '@/projects'
import { IProject } from '@/IProjects'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject>
) {
  res.status(200).json(projects)
}
