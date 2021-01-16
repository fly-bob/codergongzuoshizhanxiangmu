<!--  -->
<template>
  <div class="goodsItem" @click="goodsItemClick">
    
      <img v-lazy="imguUrl" alt="">
      <div class="goods-info">
        <p>{{popItem.title}}</p>
        <span class="price">{{popItem.price}}</span>
        <span class="collect">{{popItem.cfav}}</span>
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
    popItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    goodsItemClick(){
      // console.log(this.popItem);
      this.$router.push('/detail/'+this.goodsId)
    }
  },
  computed:{
    imguUrl(){
      // return this.popItem.show.img || this.popItem.image
      return "show" in this.popItem?this.popItem.show.img:this.popItem.image
    },
    goodsId(){
    return "iid" in this.popItem?this.popItem.iid:this.popItem.item_id
    }
  }


}

</script>
<style scoped>
.goodsItem{
  /* flex: 60%; */
  width: 48%;
  position: relative;
  padding-bottom: 40px;

}

.goodsItem img{
  width: 100%;
  border-radius: 5px;

}
.goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>