import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from './domain/Movie';

@Module({
	imports: [TypeOrmModule.forFeature([Movie])],
	controllers: [MoviesController],
	providers: [MoviesService]
})
export class MoviesModule {}
