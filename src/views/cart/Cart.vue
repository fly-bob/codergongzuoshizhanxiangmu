<template>
    <div>
      <nav-bar style="  background-color: pink;color:#fff;  font-size: 20px;">
        <div slot="middle">购物车({{$store.state.count}})</div>
      </nav-bar>
      
      <cart-list/>
      <cart-all-price-checkout/>
      
    </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartAllPriceCheckout from './childComps/CartAllPriceCheckout.vue'
import CartList from './childComps/CartList.vue'
  export default {
  components: { NavBar, CartList, CartAllPriceCheckout },
    name:"Cart"
}
</script>
<style scoped>

</style>