import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created Succefully',
      data: result,
    })
  } catch (err) {
    res.send(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}
export default {
  createUser,
}
