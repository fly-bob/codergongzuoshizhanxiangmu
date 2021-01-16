<!--  -->
<template>

      <swiper class="swiperccc">
          <swiper-item v-for="(item,index) in detailSwiperPicture" :key="index">
              <img class="picture" :src="item" alt="">
          </swiper-item>
      </swiper>

</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue';
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue';
export default {
  data () {
    return {
    };
  },
  props:{
      detailSwiperPicture:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
      Swiper, SwiperItem
      },

  computed: {},
//   updated(){
//       console.log('detail页面刷新');
//       console.log(this.detailSwiperPicture);
//   },


  methods: {}
}

</script>
<style scoped>
.swiperccc{
    height: 400px;
    text-align: center;
}
.picture{
    height: 100%;
    width: auto;
}
</style>