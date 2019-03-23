<script>
import VRatingRangeCtrl from '@/components/VRatingRangeCtrl';
import VMovieList from '@/components/VMovieList';
export default {
  name: "UserView",
  components: {
        VMovieList,
        VRatingRangeCtrl
  },

};
</script>
<template>
  <div>
    <VMovieList/>
    <VRatingRangeCtrl/>
  </div>
</template>