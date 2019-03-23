<script>
export default {
  name: "RatingRangeCtrl",
  props: {
    rating: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data: function() {
    return {
      value: 3
    };
  }
};
</script>
<template>
  <div>V RatingRange Ctrl</div>
</template>
