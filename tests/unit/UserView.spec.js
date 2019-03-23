import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";
import VRatingRangeCtrl from '@/components/VRatingRangeCtrl';
import VMovieList from '@/components/VMovieList';

describe("UserView", () => {
  it("renders the component", () => {
    // arrange
    const wrapper = shallowMount(UserView);

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the child components", () => {
    // arrange
    const wrapper = shallowMount(UserView);
    const userMovieList = wrapper.find(VMovieList);
    const userRatingRangeCtrl = wrapper.find(VRatingRangeCtrl);

    // assert
    expect(userMovieList.exists()).toBe(true);
    expect(userRatingRangeCtrl.exists()).toBe(true);
  });
});
