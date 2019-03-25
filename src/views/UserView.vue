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
      rating: 0,
      directors: [
        "Alejandro Jodorowsky",
        "Emir Kusturica",
        "Kenneth Anger",
        "Maya Deren",
        "John Waters",
        "Birgit Hein",
        "The Kuchar brothers",
        "Sarah Jacobson",
        "Melvin Van Peebles"
      ]
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
        <h3 class="text-center mb-20">Filter By Genre</h3>
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
              {{ genre.name }}
            </li>
          </ul>
        </form>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <h3 class="text-center mb-1">Filter By Rating:</h3>
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
            @drag-end="getfilteredMovies"
          ></vue-slider>
        </div>
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
    <div class="container" v-else>
      <div class="row justify-content-center">
        <div class="col-10  mt-35">
          <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
              <h1 class="display-4">Sorry no movies in cinemas match your exacting Standards...😊</h1>
              <p
                class="lead"
              >Have you thought about getting into {{directors[Math.floor(Math.random() * directors.length)]}}?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>