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
  <div class="card">
    <figure >
      <img v-if="moviePosterSrc" :src="moviePosterSrc" alt>
      <div class="card-body">
      <h5 class="card-title text-center">{{movie.title}}</h5>

      <ul class="genre-list">
        <li v-for="(genre_title) in movie.genre_titles" :key="genre_title.id"><h6 class="badge badge-midnight">{{genre_title.name}}</h6></li>
      </ul>
      </div>
    </figure>
  </div>
</template>


