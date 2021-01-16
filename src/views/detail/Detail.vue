<!--  -->
<template>
  <div id="detail">
      <nav-bar>
          <div slot="middle"><tab-control ref="tabControl" :title="['商品','参数','评论','推荐']" @clickedTabControl="clickedTabControl"/></div>
          <div slot="left" @click="backHome"><img class="backHome" src="~assets/img/common/back.svg" alt=""></div>
      </nav-bar>
      <scroll ref="scroll" class="scroll" @getPositionEvent="getPositionEvent" :probeNum="0">
                <!-- <div>{{$store.state.product}}</div> -->
                <detail-swiper :detailSwiperPicture="data.swiperPicture"/>
                <detail-info :detailGoods="data"></detail-info>
                <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
                <detail-size :detailSizeData="detailSizeData" ref="size"/>
                <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
                <h2 class="recommendText" ref="recommend">为你推荐</h2>
                <good-list :pop="pop"/>
              
      </scroll>
      <detail-bottom-bar @addToCart='addToCart'/>
      <back-top @click.native="returnTop" v-show="backtopshow"></back-top>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from '../../components/content/tabcontrol/TabControl.vue';
import DetailSwiper from './childComps/detailSwiper.vue';
import DetailInfo from './childComps/detailInfo.vue';
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailSize from './childComps/DetailSize'

import {getDetailPageData,DetailPageInfo,GoodsSize,recommendationBarData} from 'network/detail.js'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import GoodList from '../../components/content/goods/GoodList.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue';

import {backTopMixin} from 'common/mixin.js'

export default {
  components: { NavBar },
  name:'Detail',
  data () {
    return {
        data:{},
        detailInfo:{},
        detailSizeData:{},
        commentInfo:{},
        pop:[],
        itemPosition:[0],
        positionFunctionRun:true
    };
  },
  mixins:[backTopMixin],
  components:{
      NavBar,
      TabControl, 
      DetailSwiper,
      DetailInfo,
      Scroll, 
      DetailGoodsInfo,
      DetailSize, 
      DetailCommentInfo, 
      GoodList, DetailBottomBar
  },
  created(){
      getDetailPageData(this.$route.params.iid).then(res=>{
          console.log(res);
          this.data=new DetailPageInfo(res)
          console.log(this.data);
          this.detailInfo = res.result.detailInfo
          console.log(this.detailInfo);
          this.detailSizeData=new GoodsSize(res)
          console.log(this.detailSizeData);
          "list" in res.result.rate?this.commentInfo=res.result.rate.list[0]:this.commentInfo={}
          
      })
      recommendationBarData().then(res=>{
          this.pop=res.data.list
          console.log(this.pop);
      })
  },
  updated(){
      this.$nextTick(function () {
    this.$refs.scroll.scroll.refresh()
  console.log('执行Detail-updated');
  })
        // this.$nextTick(function () {
//   this.$refs.scroll.scroll.refresh()
//   console.log('执行Detail-updated');
//   })
},
  methods:{
      backHome(){
          this.$router.back()
      },
      imageLoad(){
          this.$refs.scroll.scroll.refresh()
            console.log('执行imageload');
        this.itemPosition=[0]
        this.itemPosition.push(this.$refs.size.$el.offsetTop)
        this.itemPosition.push(this.$refs.comment.$el.offsetTop)
        this.itemPosition.push(this.$refs.recommend.offsetTop)
        console.log(this.itemPosition);
      },
      clickedTabControl(index){
//   [0, 7994, 8605, 8940, __ob__: Observer]
        this.positionFunctionRun=false
        this.itemPosition=[0]
        this.itemPosition.push(this.$refs.size.$el.offsetTop)
        this.itemPosition.push(this.$refs.comment.$el.offsetTop)
        this.itemPosition.push(this.$refs.recommend.offsetTop)
        console.log(this.itemPosition);
        this.$refs.scroll.scroll.scrollTo(0,-this.itemPosition[index],350)

        // this.positionFunctionRun=false
        setTimeout(() => {
            this.positionFunctionRun=true
        }, 360);
      },
      getPositionEvent(position){
          this.backtopshow=-position.y>200
          if(this.positionFunctionRun){
                //   console.log(-position.y);
                  if(this.$refs.tabControl.currentIndex!==0 && this.itemPosition[1]>-position.y){
                      console.log('商品的位置');
                      this.$refs.tabControl.currentIndex=0
                  }else if(this.$refs.tabControl.currentIndex!==1 && this.itemPosition[2]>-position.y&&-position.y>=this.itemPosition[1]){
                      this.$refs.tabControl.currentIndex=1
                      console.log('参数的位置');
                  }else if(this.$refs.tabControl.currentIndex!==2 && this.itemPosition[3]>-position.y&&-position.y>=this.itemPosition[2]){
                      this.$refs.tabControl.currentIndex=2
                      console.log('评论的位置');
                  }else if(this.$refs.tabControl.currentIndex!==3 && -position.y>=this.itemPosition[3]){
                      this.$refs.tabControl.currentIndex=3
                  }
          }
         
          
      },
      addToCart(){
          let product={}
          product.iid=this.$route.params.iid
          product.price=this.data.oldPrice
          product.title=this.data.title
          product.picture=this.data.swiperPicture[0]
          product.desc=this.data.description
          this.$store.dispatch('cartInfo',product).then(()=>{
              this.$toast.show('添加购物车成功')
          })
          console.log(product);
      }
  }
}

</script>
<style scoped>
.backHome{
    vertical-align: middle;
    height: 17px;
    margin-left: 19px;
}
#detail{
    height: 100vh;
}
.scroll{
    height: calc(100% - 44px - 58px);
    overflow: hidden;
    position: relative;
    z-index: 99999999999999999999999;
    background-color: #fff;
}
.recommendText{
    text-align:center;
    color:rgba(255, 108, 140, 0.637);
    margin: 19px auto 8px;

}
</style>