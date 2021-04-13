import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
	constructor(
		@InjectRepository(Movie) private movieRepository: Repository<Movie>,
	) {
		this.movieRepository = movieRepository;
	}
	private movies: Movie[] = [];

	getAll(): Promise<Movie[]> {
		return this.movieRepository.find();
	}

	getOne(id: number): Movie {
		const movie = this.movies.find(movie => movie.id === id); //parseInt(id)는 +id로 바꿀 수 있다.
		if(!movie) {
			throw new NotFoundException(`Movie with ID ${id} not found`);
		}
		return movie;
	}

	deleteOne(id: number) {
		this.getOne(id);
		this.movies = this.movies.filter(movie => movie.id !== +id);
	}

	// create(movieData: CreateMovieDto) {
	// 	this.movies.push({
	// 		id: this.movies.length + 1,
	// 		...movieData,
	// 	})
	// }
	async create(movieData: CreateMovieDto): Promise<void> {
		await this.movieRepository.save(movieData);
	}

	update(id: number, updateData: UpdateMovieDto) {
		const movie = this.getOne(id);
		this.deleteOne(id);
		this.movies.push({...movie, ...updateData});
	}
}
