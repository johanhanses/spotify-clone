import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const salt = bcrypt.genSaltSync()
  const { email, password, firstName, lastName } = req.body

  let user

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
        firstName,
        lastName
      }
    })
  } catch (error) {
    res.status(401)
    res.json({ error: 'User already exists' })
  }
}
