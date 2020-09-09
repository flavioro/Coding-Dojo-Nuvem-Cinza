import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';

import AppError from './errors/AppError';

const app = express();
app.use(express.json());
/**
 * Configuracao do cors para permissões de segurança
 */
app.use(cors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  /**
   * Catch global de erros
   */
  console.log(err);
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    ststus: 'error',
    message: 'Internal server error',
  });
});
/**
 * Configuracao de rotas
 */
app.use(routes);

export default app;
