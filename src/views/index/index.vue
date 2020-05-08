<template>
 <div id="index">
  <banner></banner>
  <descript></descript>
  <details-area></details-area>
  <link-area></link-area>
  <resp-area></resp-area>
  <develop-area></develop-area>
  <Footer></Footer>

 </div>
</template>
<script>
import Banner from './banner.vue'
import Descript from './descript.vue'
import DetailsArea from './detailsArea.vue'
import LinkArea from './linkArea.vue'
import RespArea from './respArea.vue'
import DevelopArea from './developArea.vue'
import Footer from './footer.vue'
 export default {
   name:'Index',
   data () {
     return {
 
     }
   },
   components: {
     Banner,
     Descript,
     DetailsArea,
     LinkArea,
     RespArea,
     DevelopArea,
     Footer
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
