import moviesFixture from "../../../tests/unit/fixtures/movies";
import genresFixture from "../../../tests/unit/fixtures/genres";

export default {
  getMovies: jest.fn().mockResolvedValue(moviesFixture),
  getGenres: jest.fn().mockResolvedValue(genresFixture)
};
