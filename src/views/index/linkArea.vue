<template>
   <div class="link_area">
      <div class="link_hook">
        <div class="link_tab">
          <ul class="tab_list">
            <li class="list_item1">
              <a href="https://www.tencent.com/zh-cn/business.html" class="block_link">
                <h3 class="tit">连接用户与生活</h3>
                <p class="txt">让生活更便捷更多彩</p>
                <i>→</i>
              </a>
            </li>
            <li class="list_item2">
              <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b" class="block_link">
                <h3 class="tit">连接企业与科技</h3>
                <p class="txt">数字化助手，助力企业升级</p>
                <i>→</i>
              </a>
            </li>
            <li class="list_item3">
              <a href="https://www.tencent.com/zh-cn/business.html?page-active=innovation" class="block_link">
                <h3 class="tit">连接现在与未来</h3>
                <p class="txt">探索面向未来的创新科技</p>
                <i>→</i>
              </a>
            </li>
          </ul>
        </div>
        <div class="link_content">
          <div class="con_con1">
            <ul>
              <li class="item1">
                <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-5">
                  <p>腾讯广告营销</p>
                </a>
              </li>
              <li class="item2"></li>
              <li class="item3"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
 export default {
   name:'LinkArea',
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
.link_area {
    height: 600px;
}
.link_area {
    display: block;
    width: 100%;
    height: 780px;
    background: #1b1f25;
    margin-bottom: 84px;
}
.link_hook {
  width: 100%;
  height: 100%;
}
.link_tab {
  float: left;
  width: 36%;
  height: 100%;
  /* background-color: orange; */
}

.link_tab ul {
  display: block;
  height: 100%;
}
.link_tab ul li {
  display: block;
  height: 33.3%;
  opacity: 0.4;
}
.link_tab .block_link {
  display: block;
  width: 100%;
  height: 100%;
  /* opacity: 0.1; */
  color: #fff;
  text-align: center;
  /* position: relative; */
  
}
.link_tab .block_link h3 {
  display: block;
  /* position: absolute; */
  font-size: 24px;
  margin-bottom: 20px;
  padding-top: 100px;
  /* top: 30%; */
}
.link_tab .block_link p {
  display: block;
  margin-bottom: 10px;
}

.link_content {
  float: left;
  width: 64%;
  height: 100%;
  /* background-color: skyblue; */
}
.link_content .con_con1 {
  width: 100%;
  height: 100%;
}
.link_content .con_con1 ul {
  display: block;
  width: 100%;
  height: 100%;
  /* background-color: orange; */
}
.link_content .con_con1 .item1{
  display: block;
  float: left;
  width: 50%;
  height: 50%;
  background: url('../../assets/img/index_link_2_1.jpg') no-repeat center/100% ;
}
 .link_content .con_con1 .item2{
  display: block;
  float: left;
  width: 50%;
  height: 50%;
  background: url('../../assets/img/index_link_2_2.jpg') no-repeat center/100% ;
}
.link_content .con_con1 .item3{
  display: block;
  float: left;
  width: 100%;
  height: 50%;
  background: url('../../assets/img/index_link_2_3.jpg') no-repeat center/100% ;
}
.link_content .con_con1 ul a {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
