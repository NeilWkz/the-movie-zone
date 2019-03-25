import mutations from "@/store/mutations";
import initialState from "@/store/state";
import movies from "./fixtures/movies";
import genres from "./fixtures/genres";

describe("mutations", () => {
  let state;
  beforeEach(() => {
    state = { ...initialState };
  });

  it("sets the movie results", () => {
    //arrange
    const expectedmovies = movies;

    //act

    mutations.SET_MOVIES(state, expectedmovies);

    //assert
    expect(state.movies).toEqual(expectedmovies);
    expect(state.movies).not.toBe(expectedmovies);
  });
  it("sets the Genre results", () => {
    //arrange
    const expectedGenres = genres;

    //act

    mutations.SET_GENRES(state, expectedGenres);

    //assert
    expect(state.genres).toEqual(expectedGenres);
    expect(state.genres).not.toBe(expectedGenres);
  });
});
