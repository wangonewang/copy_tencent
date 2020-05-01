<template>
 <div id="details-area">
   <div class="details_con">
        <ul class="detail_list">
          <li>
            <a href="https://tencent.com/zh-cn/about.html#about-con-1">
              <p>公司简介</p>
              <img src="https://tencent.com/data/index/index_detail_1.jpg" alt="公司简介">
            </a>
          </li>
          <li>
            <a href="https://tencent.com/zh-cn/about.html#about-con-6">
              <p>企业文化</p>
              <img src="https://tencent.com/data/index/index_detail_2.jpg" alt="企业文化">
            </a>
          </li>
          <li class="last">
            <a href="https://tencent.com/zh-cn/about.html#about-con-7">
              <p>办公地点</p>
              <img src="https://tencent.com/data/index/index_detail_3.jpg" alt="办公地点">
            </a>
          </li>
        </ul>
      </div>
 </div>
</template>
<script>
 export default {
   name:'DetailsArea',
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
#details_area {
    display: block;
    width: 100%;
    margin-bottom: 84px;
}
.details_con {
  display: block;
  width: 100%;
  padding: 0 24px;
  margin: 0px auto;
  height: 250px;
  box-sizing: border-box;
}

.detail_list {
    display: block;
    height: 250px;
}
ul, li {
    list-style: none;
}
.detail_list li {
    display: inline-block;
    /* float: left; */
    height: 100%;
    width: 400px;
    /* width: 31.5%;
    margin-right: 1.5%;
    height: 210px; */

    text-align: center;
    margin-right: 20px;
    position: relative;
    overflow: hidden;
}
.detail_list li {
    width: 31.5%;
    margin-right: 1.5%;
    height: 210px;
}
a:visited, a:link, a:focus {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
    text-decoration: none;
}
.detail_list li img {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    transform: scale(1);
    transition: transform 0.3s ease-out;
}
.detail_list li a {
    display: block;
    height: 100%;
    width: 100%;
}
a, a:hover, a:active, a:visited, a:link, a:focus {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    /* -webkit-tap-highlight-color: transparent; */
    outline: none;
    background: none;
    text-decoration: none;
}
.detail_list li a:after {
    display: block;
    content: "";
    height: 4px;
    width: 2px;
    background: rgba(0,82,217,0.7);
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-out;
}
</style>
