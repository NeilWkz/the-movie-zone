import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  adapter: httpAdapter
});

export default {
  getMovies() {
    return instance.get("movie/now_playing", {
      params: {
        language: 'en-US',
        page: 1,
        api_key: process.env.VUE_APP_API_KEY
      }
    })
      .then(movies => movies.data.results);
  },
  getGenres() {
    return instance.get("genre/movie/list", {
      params: {
        language: 'en-US',
        api_key: process.env.VUE_APP_API_KEY
      }
    })
      .then(genres => genres.data.genres);
  },
};
