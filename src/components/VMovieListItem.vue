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
      <ul class="genre-list">
        <li v-for="(genre_title) in movie.genre_titles" :key="genre_title.id">{{genre_title.name}}</li>
      </ul>
    </figure>
  </div>
</template>


