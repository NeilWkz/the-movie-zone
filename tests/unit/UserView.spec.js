jest.mock("@/store/actions");
import {
  shallowMount,
  createLocalVue
} from "@vue/test-utils";
import Vuex from "vuex";
import UserView from "@/views/UserView";
import VMovieList from "@/components/VMovieList";
import VNoResults from "@/components/VNoResults";
import initialState from "@/store/state";
import actions from "@/store/actions";


const localVue = createLocalVue();
localVue.use(Vuex);

describe("UserView", () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({
        state,
        actions,
      })
    })

    return {
      wrapper,
      userMovieList: () => wrapper.find(VMovieList),
      userRatingRangeCtrl: () => wrapper.find(VRatingRangeCtrl),
      userDirector: () => wrapper.find(VNoResults)
    }
  }

  beforeEach(() => {
    jest.resetAllMocks();
    state = { ...initialState
    };
  });
  
   it('renders the component', () => {
     // arrange
     const {
       wrapper
     } = build()
     // assert
     expect(wrapper.html()).toMatchSnapshot()
   })


  it("will not render the movie list if Filtered movies is false", () => {
    // arrange
    const {userMovieList} = build();
    
    // assert
    expect(userMovieList().exists()).toBe(false)
  });

   it("Runs the GET_ALL_ DATA action to trigger the api calls", () => {
     //arrange
     const {
       wrapper
     } = build();
        wrapper.vm.$emit('mounted');
     //assert
     expect(actions.GET_ALL_DATA).toHaveBeenCalled();
   });
 
});