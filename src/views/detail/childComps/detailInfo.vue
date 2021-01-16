<!--  -->
<template>
  <div>
      <div class="title">{{detailGoods.title}}</div>
      <div class="pricebar">
          <span class="oldPrice">{{detailGoods.nowPrice}}</span>
          <span class="newPrice"><del>{{detailGoods.oldPrice}}</del></span>
          <span class="bar">活动价</span>
      </div>
      <div class="goodsInfo">
          <span>{{detailGoods.salesQuantity}}</span>
          <span class="span2">{{detailGoods.collection}}</span>
          <span class="span3">包邮</span>
      </div>
      <div class="service">
          <span v-for="(item,index) in detailGoods.service" :key="index"><img class="serviceImg" :src="item.icon" alt="">{{item.name}}</span>
      </div>
      <div class="merchant">
          <div>
              <img class="merchantLogo" :src="detailGoods.logo" alt="">{{detailGoods.merchantName}}
          </div>
          <div class="merchantDes">
              <span>
                  <span>
                      <p>{{totalSalesVolume}}</p>
                      <p>总销量</p>
                  </span>
                  <span>
                      <p>{{detailGoods.totalStock}}</p>
                      <p>全部宝贝</p>
                  </span>
              </span>
              <span>
                  <p v-for="(item,index) in detailGoods.merchandiseScore" :key="index">
                      <span>{{item.name}}</span>
                      <span :class="{scoreColor:item.score>4.8}">{{item.score}}</span>
                      <span :class="{scoreColor:item.score>4.8}">{{appraisal(item.score)}}</span>
                  </p>
              </span>
          </div>
          <div></div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  props:{
      detailGoods:{
          type:Object,
          default(){
              return {}
          }
      }
  },


  components: {},

  computed: {
    //   detailGoods.totalStock
    totalSalesVolume(){
        while(this.detailGoods.totalSalesVolume>10000){
            return (this.detailGoods.totalSalesVolume/10000).toFixed(1)+'万'
        }
        return this.detailGoods.totalSalesVolume
    }
  },



  methods: {
    appraisal(score){
        while(score>4.8){
            return '高'
        }
        return '低'
    }
  }
}

</script>
<style scoped>
.pricebar{
    position: relative;
    margin: 17px 0;
}
.oldPrice{
    margin-left: 13px;
    font-size: 23px;
    font-weight: 700;
    color: var(--color-high-text);
}
.newPrice{
    font-size: 12px;
}
.title{
    font-size: 17px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.671);
    padding: 8px;
    padding-bottom: 0;
}
.bar{
    display: inline-block;
    background-color: var(--color-high-text);
    color: #fff;
    padding: 4px;
    border-radius: 9px;
    font-size: 13px;
    position: relative;
    left: 4px;
    top: -7px;
}
.goodsInfo{
    display: flex;
    justify-content: space-between;
    margin: 5px 5px 0;
    padding-bottom: 11px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.589);
}
.goodsInfo span{
    flex: 1;
}
.span2{
    text-align: center;
}
.span3{
    text-align: right;
}
.serviceImg{
    width: 14px;
    vertical-align: middle;
    flex: 1;
}
.service{
    display: flex;
    justify-content:space-between;
    font-size: 10px;
    height: 65px;
    line-height: 65px;
}
.merchant{
    border-top: solid 2px #ccc;
    border-bottom: solid 2px #ccc;
    padding: 25px 0;
}
.merchantLogo{
    width: 35px;
}
.merchant>:nth-child(1){
    margin: 10px 5px;
    color: rgba(0, 0, 0, 0.856);
    font-weight: 550;
    line-height: 100%;
}
.merchant :nth-child(1) img{
    vertical-align: middle;
    margin-right: 8px;
    margin-left:5px
}
.merchant>:nth-child(1) span{
    display: inline-block;
}
.merchantDes{
    display: flex;
}
.merchantDes>span{
    flex: 1;
}
.merchantDes>:nth-child(1){
    display: flex;
    border-right: 1px rgb(161, 158, 158) solid;
}
.merchantDes>:nth-child(1) span{
    flex: 1;
    text-align: center;
   
}
.merchantDes>:nth-child(1) span :nth-child(1){
 padding: 15px 5px 3px;
 font-weight:600;
 color:rgba(0, 0, 0, 0.781);
 font-size:19px
}
.merchantDes>:nth-child(1) span :nth-child(2){
     font-size:13px;
     color:rgba(0, 0, 0, 0.486);
}
/* .merchantDes>:nth-child(2) p{
    display: flex;
} */
.merchantDes>:nth-child(2) p span{
    /* flex: 1; */
    /* text-align: center; */
    font-size: 14px;
    padding: 4px 4px 4px 10px;
    display: inline-block;
}
.merchantDes>:nth-child(2) p :nth-child(2),
.merchantDes>:nth-child(2) p :nth-child(3){
    color: green;
}
.scoreColor{
    color: rgba(255, 0, 119, 0.658)!important
}

</style>