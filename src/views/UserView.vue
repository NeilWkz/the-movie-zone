<script>
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
import VMovieList from "@/components/VMovieList";
export default {
  name: "UserView",
  components: {
    VMovieList,
    VRatingRangeCtrl
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
    <VMovieList/>
    <VRatingRangeCtrl :rating="rating"/>
  </div>
</template>