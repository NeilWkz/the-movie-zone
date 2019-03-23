<script>
import VMovieList from "@/components/VMovieList";
import VRatingRangeCtrl from "@/components/VRatingRangeCtrl";
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