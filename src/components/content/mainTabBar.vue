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
         <span slot="nav-text">业务</span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/business.html">面向用户</a></li>
           <li><a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b">面向企业</a></li>
           <li><a href="https://www.tencent.com/zh-cn/business.html?page-active=innovation">创新科技</a></li>
         </ul>
       </nav-center-item>
       <nav-center-item link="/staff">
         <span slot="nav-text">员工</span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-1">人才发展</a></li>
           <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-2">腾讯学院</a></li>
           <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-3">工作环境</a></li>
           <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-4">员工活动</a></li>
         </ul>
       </nav-center-item>
       <nav-center-item  link="/resp">
         <span slot="nav-text">企业责任</span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-0">全球战役</a></li>
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-1">践行承诺</a></li>
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-2">支持善举</a></li>
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-3">鼓励创新</a></li>
           <li><a href="https://www.tencent.com/zh-cn/responsibility.html#respon-con-4">企业社会责任报告</a></li>
         </ul>
       </nav-center-item>
       <nav-center-item link="/investor">
         <span slot="nav-text">投资者</span>
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
         <span slot="nav-text">媒体</span>
         <ul slot="nav_menu">
           <li><a href="https://www.tencent.com/zh-cn/media.html#media-con-1">企业动态</a></li>
           <li><a href="https://www.tencent.com/zh-cn/media.html#media-con-2">财务新闻</a></li>
           <li><a href="https://www.tencent.com/zh-cn/media.html#media-con-3">腾讯视角</a></li>
           <li><a href="https://www.tencent.com/zh-cn/media.html#media-con-4">媒体资料库</a></li>
         </ul>
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
    overflow: hidden;
    /* width: 100%;
    height: 80px; */
    /* position: absolute;
    z-index: 9; */
  }
/* nav-bar样式 */
 /* .nav-bar {
   
  color: red;
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
 } */
 
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
