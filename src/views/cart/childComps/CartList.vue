<template>
  <scroll class="cart-list" :data="[cartList]" ref="scroll">
    <!-- {{cartList}} -->
    <!-- {{$store.state.product}} -->
    <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'

	export default {
		name: "CartList",
    components: {
		  Scroll, CartListItem
    },
    data () {
      return {
        cartList:this.$store.state.product
      }
    },
    activated(){
      this.$refs.scroll.scroll.refresh()
      console.log('执行购物车scroll插件刷新');
    }
    // props: {
		//   cartList: {
		//     type: Array,
    //     default() {
		//       return []
    //     }
    //   }
    // }
	}
</script>

<style scoped>
  .cart-list {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 85px;
    overflow: hidden;
  }
</style>
