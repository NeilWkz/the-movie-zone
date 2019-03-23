import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
import VMovieList from "@/components/VMovieList";
describe("UserView", () => {
  const build = () => {
    const wrapper = shallowMount(UserView);

    return {
      wrapper,
      userMovieList: () => wrapper.find(VMovieList),
      userRatingRangeCtrl: () => wrapper.find(VRatingRangeCtrl)
    };
  };

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
});
