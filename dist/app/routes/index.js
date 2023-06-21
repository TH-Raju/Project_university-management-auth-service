"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_route_1 = require("../modules/Student/student.route");
const academicSemester_route_1 = require("../modules/academicSemester/academicSemester.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/academic-semester',
        route: academicSemester_route_1.AcademicSemesterRoutes,
    },
    {
        path: '/students',
        route: student_route_1.StudentRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
