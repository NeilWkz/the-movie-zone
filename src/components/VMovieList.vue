<script>
import VMovieListItem from '@/components/VMovieListItem';

export default {
  name: "MovieList",
  props: {
    movies: {
      type: Object,
      required: true
    }
  },
  components: {
    VMovieListItem
  }
};
</script>
<template>
  <div>Movie List
  <VMovieListItem v-for="(movie) in movies" :movie="movie" :key="movie.id" />
  </div>
</template>
