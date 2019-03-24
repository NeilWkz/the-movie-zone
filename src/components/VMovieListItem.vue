<script>
export default {
  name: "MovieListItem",
  props: {
    movie: {
      type: Object
    }
  },
  data() {
    return {
      moviePosterSrc: ""
    };
  },
  methods: {
    poster() {
      if (this.movie.poster_path) {
        this.moviePosterSrc =
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
          this.movie.poster_path;
      }
    }
  },
  created() {
    this.poster();
  }
};
</script>

<template>
  <div>
    <figure>
      <img v-if="moviePosterSrc" :src="moviePosterSrc" alt>

      {{movie.title}}
      {{movie.popularity}}
    </figure>
  </div>
</template>


