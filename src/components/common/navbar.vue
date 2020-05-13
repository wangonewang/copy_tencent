<template>
 <div class="bar" :class="isFexd == true ? 'navBar' : ''"  >
  <div class="nav-left">
    <slot name="left"></slot>
  </div>
  <div class="nav-center"
  @click="navCenterClick">
    <slot name="center"></slot>
  </div>
  <div class="nav-right">
    <slot name="right"></slot>
  </div>
 </div>
</template>
<script>
// import NavCenterItem from './navCenterItem'
 export default {
   name:'NavBar',
   data () {
     return {
       isFexd: true
     }
   },
   components: {
    //  NavCenterItem
   },
   computed:{
 
   },
   methods:{
     navCenterClick() {
      
     },
     watchScoll() {
      //  var scorllTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop 
       var scrollTop = window.pageYOffset
       if(scrollTop > 100) {
         this.isFexd = false
       }else {
         this.isFexd = true
       }
      //  console.log(scrollTop, this.isFexd)
     }
   },
   mounted() {
     window.addEventListener('scroll', this.watchScoll)
   }
 }
</script>
<style scoped>
 .navBar {
   
  /* color: red; */
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
  /* transform: translate(0, 200px);
  transition: all 10s ease; */
  /* display: none; */
 }
 .nav-left {
   flex: 3;
 }
 /* .bar a {
   color: #fff;
 } */
 .nav-center {
   flex: 6;
 }
 .nav-right {
   flex: 2;
 }
</style>
