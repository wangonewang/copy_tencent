<template>
 <div id="nav-center-item" @click="centerItemClick"
  @mouseover="centerItemHover"
  @mouseleave="centerItemLeave"
  >
   <slot name="nav-text"></slot>
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
     }
   },
 }
</script>
<style scoped>
 #nav-center-item {
   flex: 1;
 }
</style>
