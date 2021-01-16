<!--  -->
<template>
  <div>
      <table class="table1">
          <tr v-for="(item,index) in detailSizeData.rules" :key="index">
              <td v-for="(item1,index1) in item" :key="index1">{{item1}}</td>
          </tr>
      </table>      

      <table class="table1" style="border-top:1px solid rgba(100,100,100,.1)">
          <tr v-for="(item,index) in detailSizeData.info" :key="index">
              <td>{{item.key}}</td>
              <td style="color:var(--color-high-text)">{{item.value}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      detailSizeData:{
          type:Object,
          default(){
              return {}
          }
      }
  },

  components: {},

  computed: {},

 

  methods: {}
}

</script>
<style scoped>
.table1{
    margin-top: 15px;
    border-collapse: collapse;
    /* border-spacing: 40px 21px; */
    width: 100%;
}
.table1 tr{
    border: 1px solid rgba(100,100,100,.1);
    /* background-color: pink; */
    height: 30px;
    }
.table1 td{
    padding:10px 5px;
    text-align: center;
}
.table1 tr>:nth-child(1){
    width: 44px;
}
</style>