<script>
import VMovieListItem from "@/components/VMovieListItem";
import _ from "lodash";

export default {
  name: "MovieList",
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  components: {
    VMovieListItem
  },
  computed: {
    orderedMovies: function() {
      let ordered = this.movies;
      ordered = _.orderBy(ordered, ["popularity"], ["desc"]);
      return ordered;
    }
  }
};
</script>
<template>
  <div class="movie-list">
    <VMovieListItem v-for="(movie) in orderedMovies" :movie="movie" :key="movie.id"/>
  </div>
</template>
