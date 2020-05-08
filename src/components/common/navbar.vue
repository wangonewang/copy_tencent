<template>
 <div id="nav-bar"  >
  <div class="nav-left"
  :style="this.$store.state.isHover ? {color: '#0052d9'} :{}"
  ><slot name="left"></slot></div>
  <div class="nav-center"
  @click="navCenterClick"
  :style="this.$store.state.isHover ? {color: 'rgb(0, 0, 0)'} :{}"><slot name="center"></slot>
  </div>
  <div class="nav-right"
  :style="this.$store.state.isHover ? {color: '#2b2e2e'} :{}"
  ><slot name="right"></slot></div>
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
     navCenterClick() {
      
     }
   },
 }
</script>
<style scoped>
 #nav-bar {
   
  color: #eee;
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
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
