<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!activeStatus"><slot name="item-icon-quiet"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStatus?{color:itemTextActiveColor}:{}"><slot name="item-text"></slot></div>
      
      
      
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
   path:{
       mode:String
   },
   itemTextActiveColor:{
       mode:String,
       default:'rgb(255,87,119)'
   }
       
  },

  computed:{
    activeStatus(){
      return this.path.indexOf(this.$route.path)!=-1
    },
    itemTextActiveColorFunction(){
        return
    }
  },

  methods: {
      itemClick(){
          this.$router.push(this.path).catch(err=>err)
      }
  }
}

</script>
<style scoped>
.tab-bar-item{
    flex:1;
    text-align: center;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}
</style>