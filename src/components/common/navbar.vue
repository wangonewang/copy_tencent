<template>
 <div id="nav-bar">
  <div class="nav-left"><slot name="left"></slot></div>
  <div class="nav-center"><slot name="center"></slot></div>
  <div class="nav-right"><slot name="right"></slot></div>
 </div>
</template>
<script>
// import NavCenterItem from './navCenterItem'
 export default {
   name:'NavBar',
   data () {
     return {
 
     }
   },
   components: {
    //  NavCenterItem
   },
   computed:{
 
   },
   methods:{
 
   },
 }
</script>
<style scoped>
 #nav-bar {
  position: fixed;
  display: flex;
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: center;
  /* background-color: blue; */
   
 }
 .nav-left {
   flex: 3;
   /* background-color: blue; */
 }
 .nav-center {
   flex: 6;
   /* background-color: red; */
 }
 .nav-right {
   flex: 2;
   /* background-color: pink; */
 }
</style>
