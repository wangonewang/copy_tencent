<template>
  <div class="resp_area">
    <carousel></carousel>
    <resp-details></resp-details>
  </div>
</template>
<script>
import Carousel from './carousel.vue'
import RespDetails from './respDetails'
 export default {
   name:'RespArea',
   data () {
     return {
 
     }
   },
   components: {
     Carousel,
     RespDetails
   },
   computed:{
 
   },
   methods:{
 
   },
 }
</script>
<style scoped>
  .resp_area {
    position: relative;
  }
</style>
