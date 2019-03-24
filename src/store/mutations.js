export default {
  SET_MOVIES(state, movies) {
    state.movies = { ...movies };
  },
  SET_GENRES(state, genres) {
    state.genres = { ...genres };
  }
};
