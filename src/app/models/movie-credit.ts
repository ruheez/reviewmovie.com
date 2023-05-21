import {MovieCast} from "./movie-cast";
import {MovieCrew} from "./movie-crew";

export interface MovieCredit {
  id: number;
  cast: MovieCast[];
  crew: MovieCrew[];

}
