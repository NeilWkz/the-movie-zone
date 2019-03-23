<script>
import { mapState } from "vuex";
import VMovieList from "@/components/VMovieList";
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
export default {
  name: "UserView",
  components: {
    VMovieList,
    VRatingRangeCtrl
  },
  computed: {
    ...mapState({
      movies: "movies"
    })
  },
  data() {
    return {
      rating: { initial: "3" }
    };
  },
  mounted() {
    this.$store.dispatch("GET_MOVIES");
    this.$store.dispatch("GET_GENRES");
  }
};
</script>
<template>
  <div>
    <VRatingRangeCtrl :rating="rating"/>
    <VMovieList :movies="movies"/>
  </div>
</template>