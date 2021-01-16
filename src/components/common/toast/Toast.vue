<!--  -->
<template>
  <div v-show="isShow" class="toastClass">
      {{text}}
  </div>
</template>

<script>
export default {
  data () {
    return {
        text:'啊哈哈哈哈',
        isShow:false
    };
  },

  components: {},

  computed: {},

  methods: {
      show(insertText,duration=1500){
          this.isShow=true,
          this.text=insertText,
          setTimeout(() => {
              this.isShow=false,
              this.text=''
          }, duration);
      }
  }
}

</script>
<style scoped>
  .toastClass{
      position: fixed;
      top: 50%;
      left: 50%;
      height: 30px;
      line-height: 30px;
      width: 180px;
      background-color: rgba(0,0,0,.65);
      transform: translate(-50%,-50%);
      z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999;
      text-align: center;
      color: rgba(255, 255, 255, 0.822);
  }
</style>