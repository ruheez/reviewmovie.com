import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";
import {environment} from "../../../environments/environment";
import {PosterSize} from "../../shared/enums/poster-size";
import {MovieVideo} from "../../models/movie-video";
import {MovieImage} from "../../models/movie-image";
import {MovieCredit} from "../../models/movie-credit";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie | null = null;
  public movieVideos: MovieVideo[] = [];
  public movieImages: MovieImage | null = null;
  public movieCredits: MovieCredit | null = null;
  public movieSimilars: Movie[] = [];
  public movieId: number = 0;
  public baseUrlImage = environment.BASE_IMAGES_URL_ORIGINAL;
  public defaultImageSize = PosterSize.W342;

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.onGetMovieDetails();
    this.onGetMovieVideos();
    this.onGetMoviePhotos();
    this.onGetMovieCredit();
    this.onGetMovieSimilar();
  }

  /**
   * other way to get params using subscribe
   * this._activatedRoute.params.subscribe(({id}=>{
   *   console.log(id)
   * }))
   * **/
  onGetMovieDetails() {
    this.movieId = +this._activatedRoute.snapshot.params['id'];
    this._movieService.getMovieDetails(this.movieId).subscribe(
      (response) => {
        this.movie = response;
      }
    )
  }

  onGetMovieVideos() {
    this._movieService.getMovieVideos(this.movieId).subscribe(
      (response) => {
        this.movieVideos = response;
      }
    )
  }

  onGetMoviePhotos() {
    this._movieService.getMovieImages(this.movieId).subscribe(
      (response) => {
        this.movieImages = response;
      }
    )
  }

  onGetMovieCredit() {
    this._movieService.getMovieCredits(this.movieId).subscribe(
      (response) => {
        this.movieCredits = response;
        console.log(response)
      }
    )
  }

  onGetMovieSimilar() {
    this._movieService.getMovieSimilar(this.movieId).subscribe(
      (response) => {
        this.movieSimilars = response;
      }
    )
  }
}
