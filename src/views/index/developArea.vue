<template>
 <div id="developArea">
   <el-carousel :interval="5000" arrow="always" height="600px">
    <el-carousel-item v-for="item in pics" :key="item.url">
      <a href="javascript:;"><img :src="item.url" alt=""></a>
    </el-carousel-item>
  </el-carousel>
 </div>
</template>

<script>
 export default {
   name:'DevelopArea',
   data () {
     return {
       pics:[
         { url: require('../../assets/img/index_develop_bg1.jpg') },
         { url: require('../../assets/img/index_develop_bg2.jpg') },
         { url: require('../../assets/img/index_develop_bg3.jpg') },
       ]
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
  
  /* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
  img {
    width: 100%;
    height: 100%;
    /* object-fit: fill; */
  }
</style>
