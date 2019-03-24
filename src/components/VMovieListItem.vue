<script>
export default {
  name: "MovieListItem",
  props: {
    movie: {
      type: Object
    }
  }
};
</script>

<template>
  <div>
    <figure>
        movie Item
      {{movie.title}}
      {{movie.popularity}}
    </figure>
  </div>
</template>


