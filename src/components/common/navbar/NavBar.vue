<!--  -->
<template>
<div id="navbar">
  <div class="nav-bar-left"><slot name="left"></slot></div>
  <div class="nav-bar-middle"><slot name="middle"></slot></div>
  <div class="nav-bar-right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},


}

</script>
<style scoped>
#navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0px -4px 20px red;;
}
.nav-bar-middle{
flex: 1;
text-align: center;
}
.nav-bar-left,.nav-bar-right{
width: 60px;

}

</style>