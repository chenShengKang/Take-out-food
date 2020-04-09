<template>
  <div class="tab-bar">
    <div 
      class="tab-bar-item" 
      v-for="(item,index) of list" 
      :key="index"
      @click="tabBatClick(index)"
      :class="{active:currentindex == index}"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data(){
    return {
      list:['商品','评价','商家'],
      currentindex:0,
    }
  },
  methods:{
    tabBatClick(index){
      this.currentindex = index
      this.$bus.$emit('tabbar',index)
    }
  },
  computed:{
    
  }

}
</script>

<style scoped>
.tab-bar{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  color: rgb(77,85,93);
  background-color: #fff;
  box-shadow: inset 0px -1px 1px -1px rgba(7,17,27,.1);
  /* border: 1px solid rgba(7,17,27,.1) */
}
.active{
  color: rgb(240,20,20);

}
</style>
