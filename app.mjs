import express from 'express';
import morgan from 'morgan';

import userRouter from './routes/userRoutes.mjs';

const app = express();

// Middlewares
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV == 'development') app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/users', userRouter);

export default app;
