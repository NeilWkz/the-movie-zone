import flushPromises from "flush-promises";
import nock from "nock";
import api from "@/api";
import moviesFixture from "./fixtures/movies";
import genresFixture from "./fixtures/genres";

describe("api", () => {
  it("gets movies from the api", async () => {
    // arrange
     const request = nock("https://api.themoviedb.org/3/movie")
      .get("/now_playing")
      .query({
        language:'en-US',
          page: 1,
          api_key: process.env.VUE_APP_API_KEY
        })
      .reply(200, moviesFixture);

    // act
    const movies = await api.getMovies(moviesFixture);
    await flushPromises();

    // assert
    expect(movies).toEqual(moviesFixture.results);
    expect(request.isDone()).toBe(true);
  });

  it("Gets Genres from the api", async () => {
      //arrange
      const request = nock("https://api.themoviedb.org/3/genre/movie")
      .get("/list")
      .query({
        language:'en-US',
          api_key: process.env.VUE_APP_API_KEY
        })
        .reply(200, genresFixture);

        //act
        const genres = await api.getGenres(genresFixture);
        await flushPromises();

        //assert
        expect(genres).toEqual(genresFixture.genres);
        expect(request.isDone()).toBe(true);
        
  })
});
