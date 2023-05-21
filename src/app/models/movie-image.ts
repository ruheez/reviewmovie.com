import {MovieImageType} from "./movie-image-type";

export interface MovieImage {
  id: number;
  backdrops: MovieImageType[];
  posters: MovieImageType[];
  logos: MovieImageType[];
}
