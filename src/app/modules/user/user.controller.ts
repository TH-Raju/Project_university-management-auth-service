import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../share/catchAsync';
import sendResponse from '../../../share/sendResponse';
import { UserService } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;
  const result = await UserService.createUser(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully',
    data: result,
  });
});
export const UserController = {
  createUser,
};
