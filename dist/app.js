"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
// import { generateFacultyId } from './app/modules/user/user.utils';
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Application routes
// console.log(app.get('env'));
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);
app.use('/api/v1/', routes_1.default);
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x);
// })
// global error handler
app.use(globalErrorHandler_1.default);
//handle not found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});
// const testId = async () => {
//     const testId = await generateFacultyId();
//     console.log(testId);
// }
// testId()
exports.default = app;
