<template>
 <div id="main-tab-bar">
    <nav-bar class="nav-bar">
     <div slot="left" class="left"><a>
       <logo link="/index"></logo>
       </a></div>
     <div slot="center"><a class="center">
       <!-- 中间部分 -->
       <nav-center-item link="/introd">
         <span slot="nav-text">简介</span>
       </nav-center-item>
       <nav-center-item link="/busi">
         <span slot="nav-text">业务</span>
       </nav-center-item>
       <nav-center-item link="/staff">
         <span slot="nav-text">员工</span>
       </nav-center-item>
       <nav-center-item> link="/resp"
         <span slot="nav-text">企业责任</span>
       </nav-center-item>
       <nav-center-item link="/investor">
         <span slot="nav-text">投资者</span>
       </nav-center-item>
       <nav-center-item link="/media">
         <span slot="nav-text">媒体</span>
       </nav-center-item>
       </a></div>
     <div slot="right" class="right"><a>简体 / 繁体 / EN</a></div>
   </nav-bar>
 </div>
</template>
<script>
import Logo from 'views/index/logo.vue'
import NavBar from 'common/navbar.vue'
import NavCenterItem from 'common/navCenterItem.vue'
 export default {
   name:'MainTabBar',
   data () {
     return {
 
     }
   },
   components: {
     NavBar,
     NavCenterItem,
     Logo
   },
   computed:{
 
   },
   methods:{
 
   },
 }
</script>
<style scoped>
  #main-tab-bar {

    /* position: absolute;
    z-index: 9; */
  }
/* nav-bar样式 */
 .nav-bar {
   color: #fff;
 }
 .left {
   text-align: center;
   font-size: 24px;
   font-weight: 700;
 }
 .center {
   display: flex;
   font-size: 16px;
   font-weight: 700;
 }
</style>
