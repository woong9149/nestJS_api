import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // url의 Entry Point를 컨트롤한다
export class MoviesController {
	constructor(private readonly moviesService: MoviesService){} // 이 부분이 express.js 처럼 수동으로 import 하지않고 NestJS에서 기본적으로 쓰는 방법

	@Get()
	async getAll(): Promise<Movie[]> {
		return await this.moviesService.getAll();
	}

	// @Get('search')
	// search(@Query('year') searchingYear: string) {
	// 	return `We are searching for a movie made after: ${searchingYear}`;
	// }

	@Get('/:id')
	getOne(@Param('id') movieId: number): Movie { //parameter decorator
		return this.moviesService.getOne(movieId);
	}

	@Post()
	async create(@Body() movieData: CreateMovieDto) {
		await this.moviesService.create(movieData);
		return 'success';
	}

	@Delete('/:id')
	remove(@Param('id') movieId: number) {
		return this.moviesService.deleteOne(movieId);
	}

	@Patch('/:id')
	path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
		return this.moviesService.update(movieId, updateData);
	}

	
}
