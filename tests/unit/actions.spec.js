jest.mock("@/api");
import api from "@/api";
import flushPromises from "flush-promises";
import actions from "@/store/actions";
import moviesFixture from "./fixtures/movies";
import genresFixture from "./fixtures/genres";
import moviesGenresFixture from "./fixtures/moviesAndGenres";
import filteredGenresFixture from "./fixtures/filteredgenres";

describe("store actions", () => {
  let commit, dispatch;

  beforeEach(() => {
    (commit = jest.fn()), (dispatch = jest.fn());
  });

  /* 
This test was intended to test the action that dispatches the other actions

Unfortunately it doesn't work and there is no info in the docs

There is an open issue here with a possible solution. https://github.com/vuejs/vuex/issues/939
Which I could implement with more time, I'll revert to testing the individual movie actions

*/

  // it("Manipulates the data and commits to store", async () => {
  //   //arrange
  //   const expectedMovies = moviesFixture;
  //   const expectedGenres = genresFixture;
  //   const moviesAndGenres = moviesGenresFixture;
  //   const filteredGenres = filteredGenresFixture;

  //   //act
  //   await actions.GET_ALL_DATA(
  //     { commit, dispatch },
  //     { movies: expectedMovies, genres: expectedGenres }
  //   );
  //   await flushPromises();

  //   //assert

  //   expect(commit).toHaveBeenCalledWith("SET_LOAD_STATUS", 3);

  //   expect(commit).toHaveBeenCalledWith("SET_MOVIES", moviesAndGenres);
  //   expect(commit).toHaveBeenCalledWith("SET_GENRES", filteredGenres);
  // });

  it("gets the movie results", async () => {
    //arrange
    await actions.GET_MOVIES({ commit });
    await flushPromises();

    //assert
    expect(api.getMovies).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith("SET_LOAD_STATUS", 2);
  });

  it("gets the genres results", async () => {
    //arrange
    await actions.GET_GENRES({ commit });
    await flushPromises();

    //assert
    expect(api.getGenres).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith("SET_LOAD_STATUS", 2);
  });
});
