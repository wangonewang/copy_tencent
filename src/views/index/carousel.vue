<template>
 <div class="carousel"> 
  <div class="block">
    <el-carousel height="620px">
      <el-carousel-item v-for="item in pics" :key="item.url">
        <a href="javascript:;">
          <img :src="item.url" alt="">
          <h4 class="tit">全球战疫</h4>
          <p class="txt">全球战疫</p>
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
         { url: require('../../assets/img/bg1.jpg') },
         { url: require('../../assets/img/bg2.jpg') },
         { url: require('../../assets/img/bg3.jpg') },
         { url: require('../../assets/img/bg3.jpg') },
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
    width: 630px;
    height: 620px;
    margin-left: 50px;
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
    background-color: orange;
  }
  .block a .txt {
    display: block;
    width: 500px;
    font-size: 16px;
    position: absolute;
    left: 50px;
    bottom: 60px;
    line-height: 29px;
    color: #fff;
    background-color: skyblue;
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
