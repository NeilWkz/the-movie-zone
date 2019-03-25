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
      userRatingRangeCtrl: () => wrapper.find(VRatingRangeCtrl),
      director: () => wrapper.find('.random-director')
    };
  };
  beforeEach(() => {
    jest.resetAllMocks();
    state = { ...initialState };
  });

  // it("renders the component", () => {
  //   // arrange
  //   const { wrapper } = build();
  //     // assert
  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  // it("renders main child components", () => {
  //   // arrange
  //   const { userMovieList } = build();

  //   // assert
  //   expect(userMovieList().exists()).toBe(true);
  // });

  it("passes an array to movie list component", () => {
    // arrange
    state.movies = moviesFixture;
    const { userMovieList } = build();
    // assert
    expect(userMovieList().vm.movies).toBe(state.movies);
  });

  it("Runs the GET_ALL_ DATA action to trigger the api calls", () => {
    //arrange
    const { wrapper } = build();

    //assert
    expect(actions.GET_ALL_DATA).toHaveBeenCalled();
  });

});
