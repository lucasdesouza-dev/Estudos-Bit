/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { ConfigModule } from '@nestjs/config'
import { Livro } from './livro.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: process.env.USUARIO_BANCO_DE_DADOS,
      password: process.env.SENHA_BANCO_DE_DADOS,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
