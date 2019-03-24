<script>
import { mapState } from "vuex";
import VMovieList from "@/components/VMovieList";
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
import hero from "@/components/hero";
import _ from "lodash";

export default {
  name: "UserView",
  components: {
    VMovieList,
    VRatingRangeCtrl,
    hero
  },
  computed: {
    ...mapState({
      movies: "movies",
      genres: "genres",

      selectedFilters: function(state) {
        let filters = [];
        let filterGenres = _.values(this.genres);
        let checkedFiters = filterGenres.filter(obj => obj.checked);
        checkedFiters.forEach(element => {
          filters.push(element.id);
        });
        return filters;
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
        console.log(this.rating);
        console.log(filteredMoviesByfilters);
        this.filteredMovies = filteredMoviesByfilters;
      }
      if (this.rating > 0) {
        console.log(this.rating);
        filteredMoviesByRating = this.filteredMovies.filter(val => {
          return val.vote_average > this.rating;
        });
        console.log(filteredMoviesByRating);
        this.filteredMovies = filteredMoviesByRating;
      }
    }
  },
  data() {
    return {
      filteredMovies: [],
      rating: 0
    };
  },
  mounted() {
    // this.$store.dispatch("GET_MOVIES");
    // this.$store.dispatch("GET_GENRES");
    this.$store.dispatch("GET_ALL_DATA").then(() => {
      this.getfilteredMovies();
    });
  }
};
</script>
<template>
  <div>
    <hero/>
    <div class="container" aria-controls="movieList">
      <div v-if="genres" class="filter-checkboxes">
        <h3 class="text-center">Filter By Genre</h3>
        <form id="genre-filters" aria-label="Genre Filters">
          <div v-for="(genre,index) in genres" :key="index" class="form-check form-check-inline">
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
        </form>
      </div>
      <h3 class="text-center">Filter By Rating:</h3>
      <vue-slider
        v-model="rating"
        :min="0"
        :max="10"
        :lazy="true"
        :interval="0.5"
        @drag-end="getfilteredMovies"
      ></vue-slider>
    </div>
    <div v-if="filteredMovies" class="container-fluid" id="movieList" aria-live="polite">
      <VMovieList :movies="this.filteredMovies"/>
    </div>
  </div>
</template>