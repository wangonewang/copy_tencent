<template>
 <div class="carousel"> 
  <div class="block">
    <el-carousel height="620px">
      <el-carousel-item v-for="item in pics" :key="item.url">
        <a href="javascript:;">
          <img :src="item.url" alt="">
          <h4 class="tit">{{item.tit}}</h4>
          <p class="txt">{{item.txt}}</p>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
  <i class="hook_tri"></i>
 </div>
</template>

<script>
 export default {
   name:'Carousel',
   data () {
     return {
       pics: [
         {
          url: require('../../assets/img/index_resp_bg0.png'),
          tit: '全球战疫  一起行动',
          txt: '在新冠肺炎疫情之战中，腾讯秉持科技向善，以互联网科技的力量，通过我们的技术和产品为全球战疫提供支持。'
         },
         { 
           url: require('../../assets/img/index_resp_bg1.jpg'),
           tit: '99 公益日',
           txt: '每年一度于9月举行的全民公益活动，透过网上平台将大众在活动期间网上作出的捐款进行匹配。'
         },
         { url: require('../../assets/img/index_resp_bg2.jpg'),
           tit: '腾讯长城保护项目',
           txt: '腾讯公益慈善基金会与中国文物保护基金会共同合作，吸引公众关注和参与长城保护的文化遗产类公益项目。'
         },
         { url: require('../../assets/img/index_resp_bg3.jpg'),
           tit: '腾讯为村',
           txt: '根据乡村使用场景定制微信公众号，形成由村、乡镇、区县、州市组成的公众号集群服务村民，打造手机上的“为村服务中心”。'
         },
       ]
      // pics: [
      //    { url: require('../../assets/img/index_resp_bg0.png') },
      //    { url: require('../../assets/img/index_resp_bg1.png') },
      //    { url: require('../../assets/img/index_resp_bg2.png') },
      //    { url: require('../../assets/img/index_resp_bg3.png') },
      //  ]
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
  img {
    width: 100%;
    height: 100%;
    /* object-fit: fill; */
  }
  /* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
  .carousel {
    display: inline-block;
    position: relative;
    width: 660px;
    height: 620px;
    margin-left: 20px;
    margin-bottom: 80px;
  }
  .block {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: fill;
  } 
  .block a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .block a .tit {
    display: block;
    width: 500px;
    font-size: 24px;
    position: absolute;
    left: 50px;
    bottom: 110px;
    color: #ffffff;
    /* background-color: orange; */
  }
  .block a .txt {
    display: block;
    width: 500px;
    font-size: 16px;
    position: absolute;
    left: 50px;
    bottom: 40px;
    line-height: 29px;
    color: #fff;
    /* background-color: skyblue; */
  }
.hook_tri {
  display: block;
  width: 43px;
  height: 620px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url('../../assets/img/i_tri.png') no-repeat 0 0;
  background-size: contain;
  z-index: 9;
}
</style>
