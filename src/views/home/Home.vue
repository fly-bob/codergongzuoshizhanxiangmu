<!--  -->
<template>
<div id="home">
  <nav-bar class="home-nav-bar"><div slot="middle">精挑细选</div></nav-bar>
  <tab-control :title="['流行','新款','精选']"    @clickedTabControl="clickedTabControl" ref="tabControl1" class="tabControl1" v-show="tabControl2show"/>
  <scroll class="scroll" ref="scroll" :probe-num="0" :click-type="true" @getPositionEvent="getPosition" @arriveBottom="loadMore">
      <home-swiper :banners="banners" @imgLoaded="imgLoaded"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :title="['流行','新款','精选']"    @clickedTabControl="clickedTabControl"  ref="tabControl2"/>
      <good-list :pop="goods[clickedSort].list" :key="clickedSort"/>
  </scroll>
  <back-top @click.native="returnTop" v-show="backtopshow"></back-top>
 
</div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodList from '../../components/content/goods/GoodList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'

import {backTopMixin} from 'common/mixin.js'

import {
  getHomeMultidata,
  getGoodsData
} from "network/home"

export default {
  name:"Home",

  data () {
    return {
      // result:null
      banners:[],
      recommends:[],
      keywords:[],
      dkeywords:[],

      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      clickedSort:'pop',
      
      TabControlOffsetTop:0,
      tabControl2show:false,
      scrollPositionY:0
    };
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll
  },
  mixins:[backTopMixin],
  created(){
    this.getHomeMultidata()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
updated(){
  this.$refs.scroll.scroll.refresh()
  console.log('执行updated');
  // console.log(this.$refs.tabControl2.$el.offsetTop);
  // console.log(this.$refs.tabControl2.$el.offsetParent);
},
activated(){
  this.$refs.scroll.scroll.refresh()
  this.$refs.scroll.scroll.scrollTo(0,this.scrollPositionY,0)
  console.log('执行会到离开时的位置');
  console.log('active时scrollPositionY的值为'+this.scrollPositionY);
},
deactivated(){
  // console.log(this.scrollPositionY);
  console.log(this.$refs.scroll.scroll.y)
  this.scrollPositionY=this.$refs.scroll.scroll.y
},
  methods:{
    // 获取数据
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      // this.result=res;
      console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
      this.keywords=res.data.keywords.list;
      this.dkeywords=res.data.dKeyword.list;
    })
    },
    getGoodsData(type){
      const page=this.goods[type].page+1
      getGoodsData(type,page).then(res=>{
      console.log(res);
      this.goods[type].list.push(...res.data.list);
      console.log(this.goods);
      this.goods[type].page=this.goods[type].page+1
    }).catch(err=>{console.log(err);})
    },

    // 自定义监听事件
    clickedTabControl(index){
      switch(index){
        case 0:
          this.clickedSort='pop';
          break;
        case 1:
          this.clickedSort='new';
          break;
        case 2:
          this.clickedSort='sell';
          break;
      };
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index
    },
    
    getPosition(position){
      // console.log(position.y);
      this.backtopshow=-position.y>200
      this.tabControl2show=-position.y>this.TabControlOffsetTop
    },
    loadMore(){
      this.getGoodsData(this.clickedSort)
      // console.log(this.goods[this.clickedSort].page);
    },
    imgLoaded(){
      console.log('图片加载事件已传输');
      console.log(this.$refs.tabControl2.$el.offsetTop);
      this.TabControlOffsetTop=this.$refs.tabControl2.$el.offsetTop
    }
  },
  // computed:{
  //   clickedSort(){
  //     return 
  //   }
  // }

}

</script>
<style scoped>
.home-nav-bar{
  background-color: pink;
  color: #fff;
  font-size: 22px;
  /* position: fixed;
  z-index: 999; */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999999;
}
#home{
  position: relative;
  padding-top: 44px;
  height: 100vh;
  /* height: 1600px; */
}
.scroll{
  overflow:hidden;
  position: absolute;
  top: 44px;
  bottom: 45px;
  left: 0;
  right: 0;
  /* z-index: 0; */
}
/* .scroll{
  height: calc(100% - 45px);
  overflow: hidden;
} */
.tabControl1{
  position: relative;
  z-index: 99;
  /* background-color: red; */
}
</style>