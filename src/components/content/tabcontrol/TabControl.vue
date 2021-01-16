<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="item" @click="clickTabControl(index)">
      <span :class="{highlightTabControl:index==currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        currentIndex:0,
    };
  },
  props:{
      title:{
          type:Array,
          default(){
              []
          }
      }
  },
  methods:{
    clickTabControl(index){
        this.currentIndex=index;
        this.$emit('clickedTabControl',index)
    }
    
  }

}

</script>
<style scoped>
.tab-control{
    display: flex;
    /* position: sticky; */
    z-index: 1;
    /* position: -webkit-sticky; */
    /* top: 44px; */
    background-color: #fff;
    height: 44px;
    line-height: 47px;
}
.tab-control div{
    flex: 1;
    text-align: center;
}
.tab-control div span{
    padding: 5px;
}
.highlightTabControl{
    color: rgb(250, 166, 180);
    border-bottom: 1px solid rgb(161, 92, 104);
}
</style>