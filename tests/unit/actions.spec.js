jest.mock("@/api");
import flushPromises from "flush-promises";
import actions from "@/store/actions";
import api from "@/api";
import moviesFixture from "./fixtures/movies";

describe("store actions", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("gets the movie results", async () => {
    const expectedmovies = moviesFixture.results;
    //arrange
    await actions.GET_MOVIES({ commit }, { movies: expectedmovies });
    await flushPromises();

    //assert
    expect(api.getMovies).toHaveBeenCalledWith(expectedmovies);
    expect(commit).toHaveBeenCalledWith("SET_MOVIES", moviesFixture.results);
  });
});
