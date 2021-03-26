import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];

	getAll(): Movie [] {
		return this.movies;//진짜 데이터베이스라면 쿼리가 올 자리
	}

	getOne(id: string): Movie {
		return this.movies.find(movie => movie.id === parseInt(id)); //parseInt(id)는 +id로 바꿀 수 있다.
	}

	deleteOne(id: string): boolean {
		this.movies.filter(movie => movie.id !== +id);
		return true;
	}

	create(movieData) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData,
		})
	}
}
