<template>
 <div id="index">
  <banner></banner>
  <descript></descript>
  <details-area></details-area>
 </div>
</template>
<script>
import Banner from './banner.vue'
import Descript from './descript.vue'
import DetailsArea from './detailsArea.vue'
 export default {
   name:'Index',
   data () {
     return {
 
     }
   },
   components: {
     Banner,
     Descript,
     DetailsArea
   },
   computed:{
 
   },
   methods:{
 
   },
 }
</script>
<style scoped>
  /* #index {
    position: relative;
    z-index: 1;
  } */
</style>
