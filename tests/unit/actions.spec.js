jest.mock("@/store/actions");
import flushPromises from "flush-promises";
import actions from "@/store/actions";
import moviesFixture from "./fixtures/movies";
import genresFixture from "./fixtures/genres";


describe("store actions", () => {
  let commit


  beforeEach(() => {
    commit = jest.fn();
  });


  it("Manipulates the data and commits to store", async () => {
    //arrange 
    const expectedMovies = moviesFixture;
    const expectedGenres = genresFixture;
    //act
    await actions.GET_ALL_DATA({commit});
    await flushPromises();

    //assert
    expect(commit).toHaveBeenCalledWith("SET_LOAD_STATUS", 3);
    expect(commit).toHaveBeenCalledWith("SET_MOVIES", expectedMovies);
    expect(commit).toHaveBeenCalledWith("SET_GENRES", expectedGenres);


  });
});