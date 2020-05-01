<template>
 <div id="app">
  <main-tab-bar class="main-tab-bar"></main-tab-bar>
   <router-view></router-view>
 </div>
</template>
<script>
import MainTabBar from 'content/mainTabBar'
import Index from 'views/index/index'
 export default {
   name:'App',
   data () {
     return {
 
     }
   },
   components: {
     MainTabBar,
     Index
   },
   computed:{
 
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
