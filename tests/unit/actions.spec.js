jest.mock("@/api");
jest.mock("@/store/actions");
import flushPromises from "flush-promises";
import actions from "@/store/actions";
import api from "@/api";
import moviesFixture from "./fixtures/movies";
import genresFixture from "./fixtures/genres";
import store from "@/store/state";

describe("store actions", () => {
  let commit, dispatch;
  

  beforeEach(() => {
    commit = jest.fn();
    dispatch = jest.fn()
  });

  it("Manipulates the data and commits to store", async () => {
    const expectedMovies = moviesFixture.results;
    const expectedGenres = genresFixture;
    //arrange


    //assert

    expect(api.getMovies).toHaveBeenCalledWith(expectedMovies);
    expect(api.getGenres).toHaveBeenCalledWith(expectedGenres);

    expect(commit).toHaveBeenCalledWith("SET_MOVIES", moviesFixture.results);
    expect(commit).toHaveBeenCalledWith("SET_GENRES", genreFixture.genres);

   
  });
});
