import api from "@/api";

export default {
  GET_MOVIES({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const movies = await api.getMovies();
        // commit("SET_MOVIES", movies);
        return resolve(movies);
      } catch (error) {
        reject(error);
      }
    });
  },
  GET_GENRES({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const genres = await api.getGenres();
        //commit("SET_GENRES", genres);
        return resolve(genres);
      } catch (error) {
        reject(error);
      }
    });
  },

  async GET_ALL_DATA({ dispatch, commit }) {
    // GET_ALL_DATA triggers the actions that get the data from the API and then proccesses it before commiting to state

    // Call and then wait for `GET_MOVIES` & GET_GENRES to finish
    let movies = await dispatch("GET_MOVIES");
    let genres = await dispatch("GET_GENRES");
    
    let movieGenreIds = [];
    let deduped;

    let allGenres = results => {
      //loop through the all the results
      results.forEach(result => {
        // new array of all the Genre ids that are used by the returned movies
        movieGenreIds.push(...result.genre_ids);
      });
      // remove any duplicate genres
      deduped = Array.from(new Set(movieGenreIds));
    };
    allGenres(movies);
    // filter the genres so it only contains the ones returned in movies
    let filtered;
    let filterGenres = results => {
      //compare genres genres to deduped genres and filter out unused
      filtered = results.filter(el => deduped.includes(el.id));
      return Array.from(filtered);
    };
    commit("SET_GENRES", filterGenres(genres));

    let genreTitles = [];
    let movieGenres = [];

    function valuesToArray(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    }
    let moviesWithGenres = (movies, genres) => {
      //loop through the all the results
      movies.forEach(movie => {
        //match the genre titles to the movie
        genreTitles = genres.filter(el => movie.genre_ids.includes(el.id));
        movie.genre_titles = valuesToArray(genreTitles);
        movieGenres.push(movie);
      });

      return movieGenres;
    };
    commit("SET_MOVIES", moviesWithGenres(movies, genres));
    
  }
};
