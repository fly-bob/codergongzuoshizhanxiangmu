<!--  -->
<template>
  <div ref="wrapper">
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
// import ObserveDOM from '@better-scroll/observe-dom'
  // BScroll.use(ObserveDOM)
BScroll.use(Pullup)
export default {
  data () {
    return {
        scroll:null
    };
  },
  props:{
    probeNum:{
      type:Number,
      default:0
    },
    clickType:{
      type:Boolean,
      default:true
    }
  },



  mounted(){
    // console.log(this.probeNum);
      this.scroll=new BScroll(this.$refs.wrapper,{
          click:this.clickType,
          pullUpLoad:true,
          // observeDOM:true,
          // mouseWheel:true
          probeType:parseInt(this.probeNum)
      })
        // console.log(this.$refs.wrapper);
        // console.log(typeof this.probeNum.toString());
        // console.log(this.probeNum);
      this.scroll.on('pullingUp',()=>{
        console.log('底部');
        this.$emit('arriveBottom');
        this.scroll.refresh()
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },2000)
      })
      this.scroll.on('scroll',(position)=>{
        // console.log(position)
        //下面这个scroll.y的属性也挺好用的，相当于position.y。后来测试后还是有很大区别的，用scroll.y完全出问题，就是当用户手离开手机屏幕利用惯性滚动时，惯性滚动时scroll.y的值就不会变化了，这就导致完全的问题.
        // 在这里打印position.y和scroll.y结果肯定是0，因为当用户离开home界面点去其他界面的时候 这个this.scroll.on('scroll',(position)=>{函数就停止执行了，函数停止执行后 函数里面的一切数据就会被立刻销毁
        // console.log(this.scroll.y);
        this.$emit('getPositionEvent',position)
      })

   
    // this.$nextTick(() => {
    //     this.scroll=new BScroll(this.$refs.wrapper,{
    //       click:true,
    //       // pullUpLoad:true,
    //       // observeDOM:true,
    //       mouseWheel:true
    //   })
    //     console.log(this.$refs.wrapper);

    //   })








      
  },
  methods:{
    returnToTop(){
        this.scroll.scrollTo(0,0,500)
    }
  }


}
  

</script>
<style lang='scss' scoped>
</style>