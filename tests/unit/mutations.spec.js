import mutations from "@/store/mutations";
import initialState from "@/store/state";
import movies from "./fixtures/movies";

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
});
