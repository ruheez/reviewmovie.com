export const environment = {
  production: true,
  BASE_IMAGES_URL_ORIGINAL: 'https://image.tmdb.org/t/p/',
  MOVIE_DB_BASE_URL: 'https://api.themoviedb.org/3',
  MAX_PAGE_NUMBER: 500,
  env: {
    API_KEY: process.env["NG_APP_API_KEY"],
  },
};
