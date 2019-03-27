<script>
import { mapState } from "vuex";
import VMovieList from "@/components/VMovieList";
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
import hero from "@/components/hero";
import VueSlider from "vue-slider-component";
import VNoResults from "@/components/VNoResults";
import _ from "lodash";

export default {
  name: "UserView",
  components: {
    VMovieList,
    VRatingRangeCtrl,
    VueSlider,
    hero,
    VNoResults
  },
  computed: {
    ...mapState({
      movies: "movies",
      genres: "genres",
      loadStatus: "loadStatus",

      selectedFilters: function(state) {
        let filters = [];
        let filterGenres = _.values(this.genres);
        let checkedFiters = filterGenres.filter(obj => obj.checked);
        checkedFiters.forEach(element => {
          filters.push(element.id);
        });
        return filters;
      },

      loading: function(state) {
        switch (state.loadStatus) {
          case 1:
          case 2:
            return false;
            break;
          case 3:
            return true;
            break;
        }
      }
    }),
    moviesArr(state) {
      return _.values(state.movies);
    }
  },
  methods: {
    getfilteredMovies: function() {
      this.filteredMovies = this.moviesArr;

      let filteredMoviesByfilters = [];
      let filteredMoviesByRating = [];
      // if filters where selected
      if (this.selectedFilters.length > 0) {
        filteredMoviesByfilters = this.filteredMovies.filter(obj =>
          //compare every filter in the object to genre_ids
          this.selectedFilters.every(val => obj.genre_ids.indexOf(val) >= 0)
        );
        //  if the range slder is selected then filter according to popularity
        this.filteredMovies = filteredMoviesByfilters;
      }
      if (this.rating > 0) {
        filteredMoviesByRating = this.filteredMovies.filter(val => {
          return val.vote_average > this.rating;
        });
        this.filteredMovies = filteredMoviesByRating;
      }
    },
    triggerInput(target) {
      document.getElementById(target).click();
    }
  },
  data() {
    return {
      filteredMovies: [],
      rating: 0,
      menuVisible: false
    };
  },
  mounted() {
    this.$store.dispatch("GET_ALL_DATA").then(() => {
      this.getfilteredMovies();
    });
  }
};
</script>
<template>
  <div>
    <hero/>

    <!-- If I had more time, I should have put the controls into a component -->
    <div class="wrap-controls" v-bind:class="[{ opened: menuVisible }, 'container']">
      <div id="nav-icon" role="button" aria-haspopup="true" @click="menuVisible = !menuVisible">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="controls" aria-controls="movieList">
        <div class="drawer-on-mobile container">
          <div v-if="genres" class="filter-checkboxes">
            <h4 class="text-center">Filter By Genre</h4>
            <form id="genre-filters" aria-label="Genre Filters">
              <ul>
                <li
                  v-for="(genre,index) in genres"
                  :key="index"
                  class="list-group-item d-flex align-items-center"
                >
                  <div class="form-check form-check-inline form-check-switch form-check-gold">
                    <input
                      :aria-label="'Filter by '+genre.name"
                      class="form-check-input"
                      type="checkbox"
                      v-model="genre.checked"
                      :id="'filter-'+index+'-check'"
                      v-on:change="getfilteredMovies"
                    >
                    <label class="form-check-label" :for="'filter-'+index+'-check'">{{ genre.name }}</label>
                  </div>
                  <span
                    @click="triggerInput('filter-'+index+'-check')"
                    aria-hidden="true"
                  >{{ genre.name }}</span>
                </li>
              </ul>
            </form>
          </div>

          <div class="row justify-content-center">
            <div class="col-sm-6">
              <h4 class="text-center">Filter By Rating:</h4>
              <div class="rating-wrap">
                <div class="star-ratings">
                  <div class="star-ratings-top" :style="'width:'+rating*10+'%'">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div class="star-ratings-bottom">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>

              <vue-slider
                v-model="rating"
                :min="0"
                :max="10"
                :lazy="true"
                :interval="0.5"
                @change="getfilteredMovies"
              ></vue-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.loading" class="d-flex justify-content-center mt-30 mb-30">
      <div class="spinner-grow text-gold" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div
      v-if="filteredMovies && filteredMovies.length > 0"
      class="container-fluid"
      id="movieList"
      aria-live="polite"
    >
      <VMovieList :movies="this.filteredMovies"/>
    </div>
    <div v-else>
      <VNoResults/>
    </div>
  </div>
</template>