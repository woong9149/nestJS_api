import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];

	getAll(): Movie [] {
		return this.movies;//진짜 데이터베이스라면 쿼리가 올 자리
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

	create(movieData: CreateMovieDto) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData,
		})
	}

	update(id: number, updateData) {
		const movie = this.getOne(id);
		this.deleteOne(id);
		this.movies.push({...movie, ...updateData});
	}
}
