<template>
 <div id="nav-center-item" @click="centerItemClick"
  @mouseover="centerItemHover(), menu_dis()"
  @mouseleave="centerItemLeave"
  >
   <slot name="nav-text"></slot>
   <div class="nav_menu" :class="{menu_isShow: isShow_menu}">
     <slot name="nav_menu"></slot>
   </div>
 </div>
</template>
<script>
 export default {
   name:'NavCenterItem',
   props: {
     link: String
   },
   data () {
     return {
       isShow_menu: false
     }
   },
   components: {
 
   },
   computed:{
     
   },
   methods:{
     centerItemClick() {
      //  console.log('点击事件')
      this.$store.state.isHover = false
      this.$router.push(this.link)
     },
    //  鼠标进入navCenter时修改isHover的值让遮罩层显示
     centerItemHover() {
      //  console.log('触摸事件')
      // console.log(this.$store.state.isHover)
      this.$store.state.isHover = true
     },
     centerItemLeave() {
       this.$store.state.isHover = false
       this.isShow_menu = false
     },
     menu_dis() {
       this.isShow_menu = true
     }
   },
 }
</script>
<style scoped>
 #nav-center-item {
   flex: 1;
   position: relative;
 }
 .nav_menu {
   position: absolute;
   display: none;
   top: 70px;
   /* left: -20px; */
   width: 140px;
   height: 370px;
   /* background-color: orange; */
 }
 
 .menu_isShow {
   display: block;
 }
</style>
