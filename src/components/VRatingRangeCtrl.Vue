<script>

    export default {
        name: 'RatingRangeCtrl',
      
        props: {
            rating: {
                type: Object,
                required: true,
                default: () => ({})
            }
        },
          data: function () {
      return {
        value: 5,
      }
    }
    }
 
</script>

<template>
    <div>
        Rating Range Ctrl
        <vue-slider v-model="value"
        :min="0"
        :max="10"
        :interval="0.5"
        ></vue-slider>
    </div>
</template>