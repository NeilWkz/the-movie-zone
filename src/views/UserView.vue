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
      movies: "movies",
      genres: "genres"
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
    <hero/>
    <div class="container">
      <div class="filter-checkboxes">
        <form>
          <div
            v-for="(genre,index) in genres"
            :key="index"
            class="form-check form-check-inline"
           
          >
            <input
              class="form-check-input"
              type="checkbox"
              v-model="genre.checked"
              :id="'filter-'+index+'-check'"
            >
            <label class="form-check-label" :for="'filter-'+index+'-check'">{{ genre.name }}</label>
          </div>
        </form>
      </div>
      <VRatingRangeCtrl :rating="rating"/>
    </div>
    <div class="container-fluid">
      <VMovieList :movies="movies"/>
    </div>
  </div>
</template>