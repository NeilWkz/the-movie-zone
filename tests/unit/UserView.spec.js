import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import UserView from "@/views/UserView";
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
import VMovieList from "@/components/VMovieList";
import initialState from "@/store/state";
import moviesFixture from "./fixtures/movies";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("UserView", () => {
  let state;
  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state })
    });

    return {
      wrapper,
      userMovieList: () => wrapper.find(VMovieList),
      userRatingRangeCtrl: () => wrapper.find(VRatingRangeCtrl)
    };
  };
  beforeEach(() => {
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
    expect(userMovieList().vm.user).toBe(state.movies);
  });
});
