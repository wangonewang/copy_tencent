<template>
 <div id="app">
  <main-tab-bar></main-tab-bar>
   <index></index>
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

</style>
