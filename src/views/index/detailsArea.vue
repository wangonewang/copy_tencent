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

.detail_list li img {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.5s ease;
}   
.detail_list li a:hover img {
  transform: scale(1.2);
}

.detail_list li a {
    display: block;
    height: 100%;
    width: 100%;
    z-index: 1;
    transition: all .5s;
    position: relative;
}

.detail_list li a:after {
    display: block;
    content: "";
    height: 100%;
    width: 100%;
    background: rgba(0,82,217,0.7);
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    opacity: 0;
    transition: all 0.35s ease;
}
.detail_list li a:hover:after {
  opacity: 1;
}
.detail_list li p {
  display: block;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 9;
  color: #fff;
  font-size: 25px;
  padding-bottom: 5px;
}
.detail_list li p:after {
    content: ' ';
    width: 0;
    height: 2px;
    background: #fff;
    bottom: -2px;
    left: 0;
    position: absolute;
    opacity: 0;
    transition: all 0.3s ease;
}
.detail_list li a:hover p:after {
  width: 100px;
  opacity: 1;
}
</style>
