<!--  -->
<template>
  <div class="good-list">
    <good-list-item v-for="(item,index) in pop" :key="index" :popItem="item"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue';

export default {
  data () {
    return {
    };
  },
  props:{
    pop:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodListItem
    }


}

</script>
<style scoped>
.good-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
}
</style>