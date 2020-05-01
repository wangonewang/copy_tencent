<template>
 <div id="descript">
    <p class="txt">腾讯是一家以互联网为基础的平台公司，
      <span class="pc"></span>通过技术丰富互联网用户的生活，
      <span class="m"></span>助力企业数字化升级。
      <span class="pc"></span>我们的使命是“用户为本 科技向善”。
    </p>
        
 </div>
</template>
<script>
 export default {
   name:'Descript',
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
 #descript {
   width: 100%;
   height: 300px;
   color: blue;
 }
 .txt {
    text-align: center;
    font-size: 20px;
    color: #5f6464;
    line-height: 54px;
    padding: 105px 0 74px;
    /* font-family: 'TencentSansw3'; */
}
span.pc {
    display: block;
}
</style>
