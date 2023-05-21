import {Movie} from "./movie";

export interface MovieDto {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
  dates?: string;
}
