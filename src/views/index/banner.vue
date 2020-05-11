<template>
 <div id="banner">
 
 <video   id="video" 
 autoplay="" loop="" preload="" 
 muted="" x-webkit-airplay="true"
  airplay="allow" webkit-playsinline="true" 
  playsinline="true" src="https://tencent.com/video/index-video.mp4" 
  class="video1 video">
  </video>
  <div class="banner_txt">
    <div class="txtbox">
      <p class="ltxt">连接</p>
      <p class="rtxt">共生未来</p>
    </div>
    <div class="hook_area">
      <i class="word word_1">你我</i>
      <i class="word word_2">科技</i>
      <i class="word word_3">科技</i>
      <i class="word word_4">公益</i>
    </div>
  </div>
  <div class="slide_tips">
    <i></i>
    <span>滑动</span>
  </div>
 </div>
</template>
<script>
 export default {
   name:'Banner',
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
  #banner {
    /* z-index: 1; */
    display: block;
    height: 780px;
    width: 100%;
    position: relative;
    margin-top: -70px;
    overflow: hidden;

  }
  .video {
    width: 2560px;
    height: 780px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1280px;
    z-index: 1;
    /* height: 780px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; */
  }
  .banner_txt {
    display: block;
    width: 640px;
    height: 81px;
    line-height: 81px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    letter-spacing: 18px;
    z-index: 2;
    background-color: orange;
  }
  .txtbox .ltxt {
    display: inline-block;
    color: #fff;
    font-size: 54px;
    margin-right: 180px;
  }
  .txtbox .rtxt {
    display: inline-block;
    color: #fff;
    font-size: 54px;
  }
  @keyframes test {
    0% {
    transform: translate(0,88px);
    opacity: 1;
    }
  100% {
      transform: translate(0,0);
      opacity: 1;
    }
  }
  .hook_area {
    display: block;
    width: 150px;
    height: 100px;
    position: absolute;
    left: 157px;
    top: -9px;
    overflow: hidden;
    background-color: skyblue;
  }
  .hook_area .word {
    display: block;
    height: 81px;
    min-width: 160px;
    position: absolute;
    left: 0px;
    top: 9px;
    color: #fff;
    font-size: 54px;
    font-style: normal;
    text-align: left;
  }
  .slide_tips {
    position: absolute;
    width: 30px;
    height: 57px;
    left: 50%;
    margin-left: -15px;
    bottom: 62px;
    z-index: 9;
    /* background-color: orange; */
  }
  @keyframes i_animation {
      
      0% {
    transform: scale(1,1);
    transform-origin: 50% 100%;
    opacity: 1;
    }
    20% {
        transform: scale(1,0.01);
        transform-origin: 50% 100%;
        opacity: 1;
    }
    30% {
        transform: scale(1,0.01);
        transform-origin: 50% 100%;
        opacity: 0;
    }
    31% {
        transform: scale(1,0.01);
        transform-origin: 50% 0;
        opacity: 0;
    }
    50% {
        transform: scale(1,1);
        transform-origin: 50% 0;
        opacity: 1;
    }
    100% {
        transform: scale(1,1);
        transform-origin: 50% 100%;
        opacity: 1;
    }
    }
  .slide_tips i {
    display: block;
    width: 2px;
    height: 32px;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    top: 0;
    background-color: #fff;
    /* transform-origin: bottom; */
    animation: i_animation  3s 0.3s  infinite linear;
    
  }
  .slide_tips span {
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    left: 0;
    font-size: 12px;
    color: #fff;
    letter-spacing: 2px;
  }
</style>

