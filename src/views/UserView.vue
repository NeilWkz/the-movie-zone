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
  }
};
</script>
<template>
  <div>
    <VRatingRangeCtrl :rating="rating"/>
     <VMovieList :movies="movies"/>
  </div>
</template>