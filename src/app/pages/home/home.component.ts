import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {LogEngineService} from "../../shared/services/logs/log-engine.service";
import {Movie} from "../../models/movie";
import {MovieType} from "../../shared/enums/movie-type";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public upcomingMovies: Movie[] = [];
  public topRatedMovies: Movie[] = [];
  public popularMovies: Movie[] = [];
  public nowPlayingMovies: Movie[] = [];

  constructor(
    private _movieService: MovieService,
    private _logEngineService: LogEngineService) {
  }

  ngOnInit(): void {
    this.onGetUpcomingMovies();
    this.onGetTopRatedMovies();
    this.onGetPopularMovies();
    this.onGetNowPlayingMovies();
  }

  //region Populate movie list depends on their type
  onGetUpcomingMovies() {
    this._movieService.getMovies(MovieType.UPCOMING).subscribe(
      (response) => {
        this.upcomingMovies = response;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        // this._logEngineService.info(JSON.stringify(this.upcomingMovies), this.constructor.name, this.onGetUpcomingMovies.name);
      }
    )
  }

  onGetTopRatedMovies() {
    this._movieService.getMovies(MovieType.TOP_RATED).subscribe(
      (response) => {
        this.topRatedMovies = response;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        // this._logEngineService.info(JSON.stringify(this.topRatedMovies), this.constructor.name, this.onGetTopRatedMovies.name);
      }
    )
  }

  onGetPopularMovies() {
    this._movieService.getMovies(MovieType.POPULAR).subscribe(
      (response) => {
        this.popularMovies = response;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        // this._logEngineService.info(JSON.stringify(this.popularMovies), this.constructor.name, this.onGetPopularMovies.name);
      }
    )
  }

  onGetNowPlayingMovies() {
    this._movieService.getMovies(MovieType.NOW_PLAYING).subscribe(
      (response) => {
        this.nowPlayingMovies = response;
        //output
        //[HomeComponent] [Info] [onGetMoviesList] [05/01/2022, 09:19:37] [Movies Data]
        // this._logEngineService.info(JSON.stringify(this.nowPlayingMovies), this.constructor.name, this.onGetNowPlayingMovies.name);
      }
    )
  }
  //endregion
}
