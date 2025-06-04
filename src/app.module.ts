import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './modelo/cliente';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'mypass',
      database: 'clientes',
      entities: [Cliente],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Cliente]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
