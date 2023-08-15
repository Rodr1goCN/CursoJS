/* const teste = 22;
// se não tivesse uma regra no .eslintrc.js dava para usar o comando abaixo.
console.log(teste); //eslint-disable-line */

import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';
import cors from 'cors';
import helmet from 'helmet';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http://localhost:3001',
];

const corsOptions = {
  origin(origin, callback) {

  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/fotos', fotoRoutes);
  }
}

export default new App().app;
