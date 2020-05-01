<template>
 <div id="app">
  <main-tab-bar class="main-tab-bar"></main-tab-bar>
  
  <bg-hover v-show="isShow"></bg-hover>
   <router-view></router-view>
 </div>
</template>
<script>
import MainTabBar from 'content/mainTabBar'
import Index from 'views/index/index'
import BgHover from 'common/bghover.vue'
 export default {
   name:'App',
   data () {
     return {
 
     }
   },
   components: {
     MainTabBar,
     Index,
     BgHover
   },
   computed:{
     isShow() {
       return this.$store.state.isHover
     }
   },
   methods:{
 
   },
 }
</script>
<style scoped>
  @import "assets/css/base.css";
  .main-tab-bar {
    z-index: 9;
  }
</style>
