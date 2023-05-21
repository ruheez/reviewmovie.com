import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Movie} from "../../models/movie";
import {MovieType} from "../../shared/enums/movie-type";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];
  public genreId: number;
  public searchValue: string | null = null;
  public maxPageNumber: number = environment.MAX_PAGE_NUMBER;

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.genreId = this._activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.onGetMovies();
  }

  onGetMovies() {
    let hasGenreId: boolean = this._activatedRoute.snapshot.paramMap.has('id');
    if (hasGenreId) {
      this.onGetMovieByGenre(1);

    } else {
      this.onGetPopularMovies(1);
    }
  }

  onSearchMovie() {
    if (this.searchValue) {
      this.onGetPopularMovies(1, this.searchValue);
    }
  }

  onGetMovieByGenre(page: number) {
    this.genreId = this._activatedRoute.snapshot.params['id'];
    this._movieService.getMoviesByGenre(this.genreId, page).subscribe(
      (response) => {
        this.movies = response;
      }
    );
  }

  onGetPopularMovies(page: number, search?: string) {
    this._movieService.searchMovie(page, search).subscribe(
      (response) => {
        this.movies = response;
      }
    )
  }

  onPaginate($event: any) {
    const pageNumber = $event.page + 1;
    if (this.genreId) {
      this.onGetMovieByGenre(pageNumber)
    } else {
      if (this.searchValue) {
        this.onGetPopularMovies(pageNumber, this.searchValue);
      } else {
        this.onGetPopularMovies(pageNumber);
      }
    }

  }
}
