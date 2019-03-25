jest.mock("@/api");
import flushPromises from "flush-promises";
import actions from "@/store/actions";
import api from "@/api";
import vuex from "vuex";
import moviesFixture from "./fixtures/movies";
import genreFixture from "./fixtures/genres";

describe("store actions", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  // it("gets the movie results", async () => {
  //   const expectedmovies = moviesFixture.results;
  //   //arrange
  //   await actions.GET_MOVIES({ commit }, { movies: expectedmovies });
  //   await flushPromises();

  //   //assert
  //   expect(api.getMovies).toHaveBeenCalledWith(expectedmovies);
  // });

  // it("Manipulates the data and commits to store", async () => {
  //   //arrange

  //   expect(commit).toHaveBeenCalledWith("SET_MOVIES", moviesFixture.results);
  //   expect(commit).toHaveBeenCalledWith("SET_GENRES", genreFixture);

  //   //assert
  //   expect(api.getMovies).toHaveBeenCalledWith(expectedmovies);
  //   expect(api.getGenres).toHaveBeenCalledWith(expectedGenres);
  // });


});
