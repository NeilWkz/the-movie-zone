import moviesFixture from "../../../tests/unit/fixtures/movies";
import genresFixture from "../../../tests/unit/fixtures/genres";

export default {
 
  GET_ALL_DATA: jest.fn().mockResolvedValue(),
  GET_MOVIES: jest.fn().mockResolvedValue(moviesFixture),
  GET_GENRES: jest.fn().mockResolvedValue(genresFixture),
  SET_LOAD_STATUS: jest.fn().mockResolvedValue(3)
}