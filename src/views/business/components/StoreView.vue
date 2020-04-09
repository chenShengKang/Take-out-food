<template>
  <div class="StoreView">
    <div class="title">
      <h1>商家实景</h1>
    </div>
    <div class="img">
      <ul class="imgList">
        <li v-for="(item, index) of pics" :key="index" v-if="index < 3">
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'StoreView',
  props:['pics']

}
</script>

<style scoped>
.StoreView{
  padding: 16px 18px;
}
.title{
  margin-bottom: 16px;
  
}
.imgList{
  display: flex;
  justify-content: space-between;
}
.imgList li{
  flex: 0 0 32%;
}
.imgList li img{
  width: 100%;
  height: 100%;
}
</style>
