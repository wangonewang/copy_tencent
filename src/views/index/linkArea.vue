<template>
   <div class="link_area">
      <div class="link_hook">
        <div class="link_tab">
          <ul class="tab_list">
            <li class="list_item" v-for="(item, index) in link_datas" :key="item.url"
            :class="{current: currentIndex == index}"
            @mouseover="liIndex(index)">
              <a :href="item.url" class="block_link">
                <h3 class="tit">{{item.tit}}</h3>
                <p class="txt">{{item.txt}}</p>
                <i></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="link_content">
          <div class="con_con1">
            <ul>
              <li class="item1">
                <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-5">
                  <div class="script">
                    <h4 class="tit">腾讯广告营销</h4>
                    <p class="txt">大数据营销平台，汇聚腾讯全量应用场景，提供一体化数字化营销方案。</p>
                  </div>
                </a>
              </li>
              <li class="item2">
               <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-6">
                  <div class="script">
                    <h4 class="tit">腾讯云</h4>
                    <p class="txt">提供领先的云产品与云服务，辅助企业走向数字化和全球化。</p>
                  </div>
                </a>
              </li>
              <li class="item3">
                <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-7">
                  <div class="script">
                    <h4 class="tit">智慧产业</h4>
                    <p class="txt">通过云、AI、大数据分析、安全、支付、小程序、LBS等互联网前沿技术和产品，
                    <br>打造智慧产业方案，助力产业数字化升级。</p>
                    <i class="icon icon_arrow_r"></i>
                  </div>
                </a>
              </li>
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
       link_datas: [
         {
           url: 'https://www.tencent.com/zh-cn/business.html',
           tit: '连接用户与生活',
           txt: '让生活更便捷更多彩'
         },
         {
           url: 'https://www.tencent.com/zh-cn/business.html?page-active=to-b',
           tit: '连接企业与科技',
           txt: '数字化助手，助力企业升级'
         },
         {
           url: 'https://www.tencent.com/zh-cn/business.html?page-active=innovation',
           tit: '连接现在与未来',
           txt: '探索面向未来的创新科技'
         },
       ],
       currentIndex: 0,
     }
   },
   components: {
 
   },
   computed:{
 
   },
   methods:{
     liIndex(index) {
       this.currentIndex = index
     }
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
.link_tab ul .current {
  opacity: 1;
}
.link_tab .block_link {
  display: block;
  width: 100%;
  height: 100%;
  /* opacity: 1; */
  color: #fff;
  text-align: center;
  position: relative;
  
}
.link_tab .block_link h3 {
  display: block;
  position: absolute;
  font-size: 24px;
  top: 40%;
  left: 50%;
  /* transform: translateX(-50%); */
  margin-left: -22%;
  transition: all 0.5s ease;
}
.link_tab .block_link h3:after {
  content: '';
  display: block;
  width: 6px;
  height: 70px;
  background-color: #1e52d8;
  position: absolute;
  left: 50%;
  margin-left: -90%;
  top: 0%;
  opacity: 0;
  transition: all 0.5s ease;
}
.link_tab .block_link p {
  display: block;
  position: absolute;
  top: 55%;
  left: 50%;
  margin-left: -22%;
  transition: all 0.5s ease;
}
.link_tab .block_link:hover h3 {
  transform: translateX(10px);
  /* margin-left: -19%; */
}
.link_tab .block_link:hover h3:after {
  margin-left: -65%;
  opacity: 1;
}
.link_tab .block_link:hover p {
  transform: translateX(10px);
  /* margin-left: -19%; */
}
.link_tab .block_link i {
  display: block;
  height: 16px;
  width: 54px;
  background: url('../../assets/img/icon_arrow_r.png') no-repeat 0/100%;
  position: absolute;
  left: 28%;
  top: 68%;
  opacity: 0;
  transition: all 0.3s ease;
}
.link_tab .block_link:hover i {
  left: 30%;
  opacity: 1;
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
  background: url('../../assets/img/index_link_2_1.jpg') no-repeat center/cover ;
}
 .link_content .con_con1 .item2{
  display: block;
  float: left;
  width: 50%;
  height: 50%;
  background: url('../../assets/img/index_link_2_2.jpg') no-repeat center/cover ;
}
.link_content .con_con1 .item3{
  display: block;
  float: left;
  width: 100%;
  height: 50%;
  background: url('../../assets/img/index_link_2_3.jpg') no-repeat center/cover;
}
.link_content .con_con1 ul a {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
}
.link_content .con_con1 .script {
  display: block;
  width: 100%;
  height: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
  /* background-color: skyblue; */
}
.con_con1 .script .tit {
  display: block;
  margin-left: 43PX;
  margin-top: 119px;
  font-size: 20px;
  transition: margin-top 0.3s ease;
}
.con_con1 .script .txt {
  display: block;
  margin-left: 43px;
  margin-top: 12px;
  line-height: 1.8;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.con_con1 a:hover .tit {
  margin-top: 70px;
}
.con_con1 a:hover .txt {
  opacity: 1;
}
</style>
