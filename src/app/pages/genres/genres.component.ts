import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {GenreDto} from "../../models/genre-dto";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  public genres: GenreDto[] = [];

  constructor(private _movieService: MovieService) {
  }

  ngOnInit(): void {
    this.onGetGenres();
  }

  onGetGenres() {
    this._movieService.getGenres().subscribe(
      (response) => {
        this.genres = response;
      }
    )
  }
}
