import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies') // url의 Entry Point를 컨트롤한다
export class MoviesController {
	@Get()
	getAll() {
		return 'This will return all movies';
	}

	@Get('search')
	search(@Query('year') searchingYear: string) {
		return `We are searching for a movie made after: ${searchingYear}`;
	}

	@Get('/:id')
	getOne(@Param('id') id: string) { //parameter decorator
		return `This will return one movie with the id: ${id}`;
	}

	@Post()
	create(@Body() movieData) {
		return movieData;
	}

	@Delete('/:id')
	remove(@Param('id') id: string) {
		return `This will delete a movie with the id : ${id}`;
	}

	@Patch('/:id')
	path(@Param('id') movieId: string, @Body() updateData) {
		return {
			updatedMovie: movieId,
			updateData,
		};
	}

	
}
