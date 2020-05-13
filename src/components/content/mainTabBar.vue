<template>
 <div id="main-tab-bar">
    <nav-bar class="nav-bar">
     <div slot="left" class="left">
       <a :style="this.$store.state.isHover == true ? {color: '#0052d9'} :{}">
       <logo link="/index"></logo>
       </a>
     </div>
     <div slot="center">
       <a class="center" :style="this.$store.state.isHover== true ? {color: 'rgb(0, 0, 0)'} :{color: '#fff'}">
       <!-- 中间部分 -->
       <nav-center-item link="/introd">
          <span slot="nav-text">
            简介
            <i></i>
          </span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-1">公司简介</a></li>
           <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-2">愿景与使命</a></li>
           <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-3">发展历程</a></li>
           <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-4">业务架构</a></li>
           <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-5">管理团队</a></li>
           <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-6">企业文化</a></li>
           <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-7">办公地点</a></li>
         </ul>
       </nav-center-item>
       <nav-center-item link="/busi">
         <span slot="nav-text">
           业务
           <i></i>
          </span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/business.html">面向用户</a></li>
           <li><a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b">面向企业</a></li>
           <li><a href="https://www.tencent.com/zh-cn/business.html?page-active=innovation">创新科技</a></li>
         </ul>
       </nav-center-item>
       <nav-center-item link="/staff">
         <span slot="nav-text">
          员工
          <i></i>
         </span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-1">人才发展</a></li>
           <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-2">腾讯学院</a></li>
           <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-3">工作环境</a></li>
           <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-4">员工活动</a></li>
         </ul>
       </nav-center-item>
       <nav-center-item  link="/resp">
         <span slot="nav-text">
          企业责任
          <i></i>
         </span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-0">全球战役</a></li>
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-1">践行承诺</a></li>
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-2">支持善举</a></li>
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-3">鼓励创新</a></li>
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-4">企业社会责任报告</a></li>
         </ul>
       </nav-center-item>
       <nav-center-item link="/investor">
         <span slot="nav-text">
          投资者
          <i></i>
         </span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-1">财务新闻</a></li>
           <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-2">公告及财务报告</a></li>
           <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-3">业绩电话会及路演</a></li>
           <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-4">投资者工具包</a></li>
           <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-5">证券及债券信息</a></li>
           <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-6">企业管治</a></li>
         </ul>
       </nav-center-item>
       <nav-center-item link="/media">
         <span slot="nav-text">
          媒体
          <i></i>
         </span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/media.html#media-con-1">企业动态</a></li>
           <li><a href="https://www.tencent.com/zh-cn/media.html#media-con-2">财务新闻</a></li>
           <li><a href="https://www.tencent.com/zh-cn/media.html#media-con-3">腾讯视角</a></li>
           <li><a href="https://www.tencent.com/zh-cn/media.html#media-con-4">媒体资料库</a></li>
         </ul>
       </nav-center-item>
       </a></div>
     <div slot="right" class="right">
       <a :style="this.$store.state.isHover== true ? {color: '#2b2e2e'} :{}"> 
         简体 / 繁体 / EN
       </a>
     </div>
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
    overflow: hidden;
  }
  #main-tab-bar .left a, #main-tab-bar .right a {
    color: #fff;
  }
 
 #main-tab-bar .left {
   text-align: center;
   font-size: 24px;
   font-weight: 700;
 }
 .center {
   display: flex;
   font-size: 16px;
   font-weight: 700;
 }
 /* .center .contain {
   display: block;
   width: 100%;
   height: 100%;
 }  */
 .center span {
   position: relative;
 }
 .center span i {
   display: block;
   width: 0%;
   height: 3px;
   position: absolute;
   left: 0%;
   bottom: -30%;
   background-color: blue;
   transition: all .1s ease;
   /* z-index: 9; */
 }
 .center span:hover i {
   width: 100%;
   opacity: 1;
 }
 .center ul {
   display: block;
   width: 100%;
   height: 100%;
   line-height: 30px;
   font-size: 16px;
   font-weight: 400;
 }
 .center ul li {
   display: block;
   margin-bottom: 20px;
 }
</style>
