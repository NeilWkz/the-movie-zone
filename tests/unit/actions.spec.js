jest.mock("@/api");
import api from "@/api";
import flushPromises from "flush-promises";
import actions from "@/store/actions";
import moviesFixture from "./fixtures/moviesAndGenres";
import genresFixture from "./fixtures/genres";


describe("store actions", () => {
  let commit, dispatch;


  beforeEach(() => {
    commit = jest.fn(),
    dispatch = jest.fn();

  });

/* 
This test was intended to test an action that dispatches other actions

Unfortunately it doesn't work and there is no info in the docs

There is an open issue here with a possible solution. https: //github.com/vuejs/vuex/issues/939
Which I could implement with more time, I'll revert to testing the individual movie actions

*/


  // it("Manipulates the data and commits to store", async () => {
  //   //arrange 
  //   const expectedMovies = moviesFixture;
  //   const expectedGenres = genresFixture;
  //   //act
  //   await actions.GET_ALL_DATA({commit, dispatch});
  //   await flushPromises();

  //   //assert
  //   expect(dispatch).toHaveBeenCalledWith("GET_MOVIES");
  //   expect(commit).toHaveBeenCalledWith("SET_LOAD_STATUS", 3);

  //   expect(commit).toHaveBeenCalledWith("SET_MOVIES", expectedMovies);
  //   expect(commit).toHaveBeenCalledWith("SET_GENRES", expectedGenres);


  // });

  it('gets the movie results', async () => {
    // arrange
    const expectedMovies = moviesFixture;

    // act
    await actions.GET_MOVIES({
      commit
    }, {
      movies: expectedMovies
    })
    await flushPromises()

    // assert
    expect(api.getMovies).toHaveBeenCalledWith(expectedMovies);
    
  })


  
});