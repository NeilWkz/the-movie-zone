import api from "@/api";

export default {
  GET_MOVIES({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const movies = await api.getMovies();
        commit("SET_MOVIES", movies);
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
        commit("SET_GENRES", genres);
        return resolve(genres);
      } catch (error) {
        reject(error);
      }
    });
  }
};
