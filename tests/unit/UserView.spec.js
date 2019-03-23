jest.mock("@/store/actions");
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import UserView from "@/views/UserView";
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
import VMovieList from "@/components/VMovieList";
import initialState from "@/store/state";
import actions from "@/store/actions";
import moviesFixture from "./fixtures/movies";
import genresFixture from "./fixtures/genres";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("UserView", () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state, actions })
    });

    return {
      wrapper,
      userMovieList: () => wrapper.find(VMovieList),
      userRatingRangeCtrl: () => wrapper.find(VRatingRangeCtrl)
    };
  };
  beforeEach(() => {
    jest.resetAllMocks();
    state = { ...initialState };
  });

  it("renders the component", () => {
    // arrange
    const { wrapper } = build();
    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    // arrange
    const { userMovieList, userRatingRangeCtrl } = build();

    // assert
    expect(userMovieList().exists()).toBe(true);
    expect(userRatingRangeCtrl().exists()).toBe(true);
  });

  it("Passes a binded prop to the rating range component", () => {
    //arrange
    const { wrapper, userRatingRangeCtrl } = build();
    wrapper.setData({
      rating: {
        initial: 3
      }
    });
    //assert
    expect(userRatingRangeCtrl().vm.rating).toBe(wrapper.vm.rating);
  });

  it("passes an object to movie list component", () => {
    // arrange
    state.movies = moviesFixture;
    const { userMovieList } = build();

    // assert
    expect(userMovieList().vm.movies).toBe(state.movies);
  });

  it("Gets the movies from the api for the movie list component", () => {
    //arrange
    state.movies = moviesFixture;
    const { userMovieList } = build();

    //assert
    expect(actions.GET_MOVIES).toHaveBeenCalled();
    expect(actions.GET_MOVIES.mock.calls[0][0].state.movies).toEqual(
      state.movies
    );
  });
  it("Gets the Genres from the api for the Genre Filters", () => {
    //arrange
    state.genres = genresFixture;
    const { wrapper } = build();

    //assert
    expect(actions.GET_GENRES).toHaveBeenCalled();
    expect(actions.GET_GENRES.mock.calls[0][0].state.genres).toEqual(
      state.genres
    );
  });
});
