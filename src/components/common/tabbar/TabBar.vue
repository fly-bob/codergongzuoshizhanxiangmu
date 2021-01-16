<!--  -->
<template>
  <div id="tab-bar">
      <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },


}

</script>
<style scoped>
#tab-bar{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    box-shadow: 0px -8px 20px pink;
    background-color: #fff;
    z-index: 999;
}
</style>