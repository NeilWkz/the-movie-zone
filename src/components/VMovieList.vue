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
  <!-- <div class="movie-list"> -->
    <transition-group name="movie-card" tag="div" class="movie-list">
    <VMovieListItem v-for="(movie) in orderedMovies" :movie="movie" :key="movie.id"/>
    </transition-group>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
/* base */
.movie-card {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.movie-card-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.movie-card-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.movie-card-leave-active {
  transition: all 200ms ease-in;
  transform: scale(0.8);
  z-index: 0;
}

/* appear at / disappear to */
.movie-card-enter,
.movie-card-leave-to {
  opacity: 0;
}

</style>

