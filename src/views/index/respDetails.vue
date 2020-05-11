<template>
 <div id="respDetails">
   <!-- <link rel="stylesheet" href="//at.alicdn.com/t/font_1812067_owtqct7n1jq.css"> -->
   <h3 class="tit">
     连接<br/>
     责任与信任
   </h3>
   <p class="txt">
     聚合微小善行, 以科技让世界更美好
   </p>
   <a href="https://www.tencent.com/zh-cn/responsibility.html">
   <!-- <i class="iconfont icon-arrowright1"></i> -->
   <i></i>
   </a>
 </div>
</template>
<script>
 export default {
   name:'respDetails',
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
  #respDetails {
    display: inline-block;
    width: 300px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0, -50%);
  }

  .tit {
    display: block;
    color: #2a2e2e;
    width: 450px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 28px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 20px;
    /* font-family: 'TencentSansw7'; */
}
a {
  display: inline-block;
  /* width: 80Px;
  height: 40px; */
  margin-top: 30px;
}
i {
  display: inline-block;
  width: 38Px;
  height: 16px;
  /* transform: scaleX(2); */
  background: url('../../assets/img/icon_arrow_r_dark.png') no-repeat 0/100%;
}
</style>
