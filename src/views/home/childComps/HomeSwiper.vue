<!--  -->
<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoaded">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index"

export default {
  data () {
    return {
      daihao:true
    };
  },
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },

  components: {
          Swiper,
    SwiperItem
    
  },
  methods:{
    imgLoaded(){
   
      // this.daihao?this.$emit('imgLoaded'):this.daihao=false
      if (this.daihao){ 
        this.$emit('imgLoaded')
        this.daihao=false
        }
    }
  }


}

</script>
<style scoped>
</style>