<!--  -->
<template>
  <div class="recommend-view">
      <div v-for="item in recommends" :key="item.image">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
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
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {},

  computed: {},


  methods: {}
}

</script>
<style scoped>
.recommend-view{
    display: flex;
    border-bottom: 7px solid pink;
    padding-bottom: 20px;
}
.recommend-view div{
    flex: 1;
    text-align: center;
}
.recommend-view div a img{
    width: 80%;
    vertical-align: middle;
    margin-top: 6px;
    margin-bottom: 4px;
}
</style>