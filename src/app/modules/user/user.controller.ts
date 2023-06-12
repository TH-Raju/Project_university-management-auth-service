import { Request, Response } from 'express';
import catchAsync from '../../../share/catchAsync';
import { UserService } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;
  const result = await UserService.createUser(user);
  res.status(200).json({
    success: true,
    message: 'User created Succefully',
    data: result,
  });
});
export const UserController = {
  createUser,
};
