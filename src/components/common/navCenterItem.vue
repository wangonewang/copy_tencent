<template>
 <div id="nav-center-item" @click="centerItemClick">
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
      this.$router.push(this.link)
     }
   },
 }
</script>
<style scoped>
 #nav-center-item {
   flex: 1;
 }
</style>
