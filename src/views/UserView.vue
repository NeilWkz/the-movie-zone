<script>
import { mapState } from "vuex";
import VMovieList from "@/components/VMovieList";
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
import hero from "@/components/hero";

export default {
  name: "UserView",
  components: {
    VMovieList,
    VRatingRangeCtrl,
    hero
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
    <hero />
    <VRatingRangeCtrl :rating="rating"/>
    <VMovieList :movies="movies"/>
  </div>
</template>