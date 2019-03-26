export default {
  SET_MOVIES(state, movies) {
    state.movies = { ...movies };
  },
  SET_GENRES(state, genres) {
    state.genres = { ...genres };
  },
  SET_LOAD_STATUS(state, status) {
    state.loadStatus = status ;
  }
};
