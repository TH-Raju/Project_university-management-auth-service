import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes
// console.log(app.get('env'));

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);

app.use('/api/v1/', routes);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x);
// })

// global error handler
app.use(globalErrorHandler);

export default app;
