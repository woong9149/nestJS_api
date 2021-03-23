import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'boa457813',
      database: 'opentutorials',
      entities: [],
      synchronize: true,
    })
  ],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
