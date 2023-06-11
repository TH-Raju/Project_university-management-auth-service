import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
// import { UserController } from './user.controller';
// import {  } from './user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
  //   UserController.createUser
);

export const UserRoutes = router;
