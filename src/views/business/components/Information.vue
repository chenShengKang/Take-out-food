<template>
  <div class="information">
    <div class="title">
      <h3>商家信息</h3>
    </div>
    <ul class="list">
      <li v-for="(item,index) of infos" :key="index" class="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Information',
  props:['infos']

}
</script>

<style scoped>
.information{
  padding: 16px;
}
.title{
  padding-bottom: 14px;
}
.list li{
  padding: 10px 0;
  box-shadow: 0 1px 1px rgba(7,17,27,0.1);
  box-shadow: 0 -1px 1px rgba(7,17,27,0.1);
}
</style>
