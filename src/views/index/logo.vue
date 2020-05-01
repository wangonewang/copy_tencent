<template>
 <div id="logo" @click="logoClick">
   Tencent 腾讯
 </div>
</template>
<script>
 export default {
   name:'Logo',
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
     logoClick() {
       this.$router.push(this.link)
     }
   },
 }
</script>
<style scoped>
 
</style>
