import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // url의 Entry Point를 컨트롤한다
export class MoviesController {
	constructor(private readonly moviesService: MoviesService){} // 이 부분이 express.js 처럼 수동으로 import 하지않고 NestJS에서 기본적으로 쓰는 방법

	@Get()
	getAll(): Movie [] {
		return this.moviesService.getAll();
	}

	// @Get('search')
	// search(@Query('year') searchingYear: string) {
	// 	return `We are searching for a movie made after: ${searchingYear}`;
	// }

	@Get('/:id')
	getOne(@Param('id') movieId: string): Movie { //parameter decorator
		return this.moviesService.getOne(movieId);
	}

	@Post()
	create(@Body() movieData) {
		return this.moviesService.create(movieData);
	}

	@Delete('/:id')
	remove(@Param('id') movieId: string) {
		return this.moviesService.deleteOne(movieId);
	}

	@Patch('/:id')
	path(@Param('id') movieId: string, @Body() updateData) {
		return {
			updatedMovie: movieId,
			updateData,
		};
	}

	
}
