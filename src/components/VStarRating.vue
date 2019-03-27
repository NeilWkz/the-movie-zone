<script>
export default {
  name: "starRating",
  props: {
    rating: {
      type: Number,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<template>
  <div class="star-ratings">
    <div class="star-ratings-top" :style="'width:'+rating*10+'%'">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
    <div class="star-ratings-bottom">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  </div>
</template>
    
