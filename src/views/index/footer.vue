<template>
 <div id="footer">
   <div class="footer_con">
     <div class="focus_us">
       <h3>关注我们</h3>
     </div>
     <div class="join_us">
       <h3>加入我们</h3>
       <ul>
         <li><a href="https://careers.tencent.com/">社会招聘</a></li>
         <li><a href="https://join.qq.com/">校园招聘</a></li>
         <li><a href="https://careers.tencent.com/en-us/home.html">国际招聘</a></li>
       </ul>
     </div>
     <div class="contact_us">
       <h3>联系我们</h3>
       <ul>
         <li><a href="https://www.tencent.com/zh-cn/customer-service.html">客户服务</a></li>
         <li><a href="https://www.tencent.com/zh-cn/partnership.html">合作洽谈</a></li>
         <li><a href="https://spd.tencent.com/portal">腾讯采购</a></li>
         <li><a href="https://www.tencent.com/zh-cn/enquiry.html">媒体及投资者</a></li>
       </ul>
     </div>
     <div class="legal_info">
       <h3>法律信息</h3>
       <ul>
         <li><a href="https://www.tencent.com/zh-cn/service-agreement.html">服务协议</a></li>
         <li><a href="https://www.tencent.com/zh-cn/privacy-policy.html">隐私政策</a></li>
         <li><a href="https://ipr.tencent.com/">知识产权</a></li>
       </ul>
     </div>
     <div class="logo_tencent">
       <img src="../../assets/img/tencent_logo.png" alt="tencent">
     </div>
     <div class="footer_area">
       <ul class="link">
         <li><a href="https://www.tencent.com/zh-cn/statement.html">法律声明</a></li>
         <li><a href="https://www.tencent.com/zh-cn/integrity-policy.html">阳光准则</a></li>
         <li><a href="https://www.tencent.com/zh-cn/sitemap.html">网站地图</a></li>
         <li><a href="http://beian.miit.gov.cn/">粤网文【2017】6138-1456号</a></li>
         <li><a href="http://beian.miit.gov.cn/">粤B2-20090059-1</a></li>
       </ul>
       <p class="copyright">
        <a href="http://beian.miit.gov.cn/" class="flag_num">
          Copyright © 1998 - 2020 Tencent. All Rights Reserved. 腾讯公司 版权所有
        </a>
        </p>
     </div>
   </div>
 </div>
</template>
<script>
 export default {
   name:'Footer',
   data () {
     return {
 
     }
   },
   components: {
 
   },
   computed:{
 
   },
   methods:{
 
   },
 }
</script>
<style scoped>
  #footer {
    width: 100%;
    height: 480px;
    /* background-color: skyblue; */
    color: #5f6364;
  }
  .footer_con {
    width: 96%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    /* background-color: skyblue; */
  }
  .focus_us {
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #f2f3f5;
    margin-bottom: 40px;
    padding-top: 33px;
  }
  .focus_us .tit {
    display: inline-block;
    margin-right: 33px;
    font-size: 20px;
    font-weight: 400;
    color: #5f6364;
  }
  .join_us, .contact_us, .legal_info {
    width: 20%;
    /* display: inline-block; */
    float: left;
  }
  .join_us h3, .contact_us h3, .legal_info h3 {
    display: block;
    margin-bottom: 30px;
  }
  .join_us li, .contact_us li, .legal_info li {
    display: block;
    margin-bottom: 20px;
    
  }
  .join_us li a, .contact_us li a, .legal_info li a {
    color: #5f6364;
  }
  .logo_tencent {
    display: block;
    width: 212px;
    height: 28px;
    position: absolute;
    right: 75px;
    top: 50%;
    transform: translateY(-50%);
  }
  .logo_tencent img {
    width: 100%;
  }
  .footer_area {
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 53px;
  }
  .footer_area ul {
    display: block;
    margin-bottom: 10px;
    height: 20px;
  }
  .footer_area li {
    /* display: inline-block; */
    float: left;
    margin-right: 20px;
    /* line-height: 30px; */
  }
  .footer_area li a {
    font-size: 14px;
    color: #5f6364;
  }
  .copyright {
    display: block;
  }
  .copyright a {
    font-size: 14px;
    color: #5f6364;
  }
</style>
