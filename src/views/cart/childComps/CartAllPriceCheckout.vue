<!--  -->
<template>
  <div class="countBottomBar">
      <div class="allChecked">
          <check-button class="checkBottom"  @click.native="clickAllChecked" :value="whetherChecked"/>全选
      </div>
      <div>合计：￥{{getAllPrice}}</div>
      <div class="countButton" @click="countIt">去结算({{$store.state.count}})</div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue';
export default {
  data () {
    return {
        
    };
  },

  components: {
    CheckButton

  },

  computed: {
      getAllPrice(){
          return this.$store.state.product.reduce((predata,item)=>{
              return predata+item.price.substr(1)*item.count
          },0).toFixed(2)
      },
      whetherChecked(){
          return this.$store.state.product.every((item)=>item.checked)
      }
  },




  methods: {
      clickAllChecked(){
          if(this.whetherChecked){
              this.$store.state.product.forEach(element => {
                  element.checked=false
              });
          }else{
              this.$store.state.product.forEach(element => {
                  element.checked=true
              });
          }
      },
      countIt(){
          console.log(this.$store.state.product);
          console.log(this.$store.state.product==0);
          console.log(this.$store.state.length==0 || !this.$store.state.product.every((item)=>item.checked));
          if (this.$store.state.product.length==0 || !this.$store.state.product.every((item)=>item.checked)) {
              this.$toast.show('请先添加商品再付款')
          }
          
      }
  }
}

</script>
<style scoped>
    .countBottomBar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        z-index: 99999999999999999999999999999999999999999999999;
        bottom: 45px;
        left: 0;
        right: 0;
        height: 40px;
        /* line-height: 40px; */
        background-color: #eee;
    }
    .allChecked{
        margin-left: 10px;
    }
    .checkBottom{
        display: inline-block;
        margin-right: 4px;
    }
    .countButton{
        width: 90px;
        background-color: rgb(247, 27, 56);
        height: 100%;
        line-height: 40px;
        text-align: center;
        color: white;
        font-size: 14px;
    }
</style>

