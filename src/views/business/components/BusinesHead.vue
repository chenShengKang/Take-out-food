<template>
  <div class="head">
    <div class="title-wrap">
      <div class="title">
        <p>{{seller.name}}</p>
        <div class="sellCounr-wrap">
          <star :size="36" :score="seller.score"></star>
          <span class="sellCount">月售{{seller.sellCount}}单</span>
        </div>
      </div>
      <div class="Collection">
        <div class="addColl"></div>
        <p>已收藏</p>
      </div>
    </div>
    <div class="content-wrap">
      <div class="left ce">
        <p class="title">起送价</p>
        <p class="dollar">{{seller.minPrice}}<span>元</span> </p>
      </div>
      <div class="center ce">
         <p class="title">起送价</p>
        <p class="dollar">{{seller.deliveryPrice}}<span>元</span> </p>
      </div>
      <div class="right ce" >
         <p class="title">起送价</p>
        <p class="dollar">{{seller.deliveryTime}}<span>分钟</span> </p>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/common/start/Start.vue'

export default {
  name:'BusinesHead',
  components: {
    star
  },
  props: ['seller']

}
</script>

<style scoped>
.head{
  padding: 18px;
}
.title-wrap{
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba(7,17,27,.1);
}
.title{
  font-size: 20px;
}
.sellCounr-wrap{
  display: flex;
  font-size: 12px;
  margin: 5px 0;
}
.sellCount{
  margin-left: 10px;
  margin-top: 10px;
  vertical-align: middle;
}
.Collection{
  position: absolute;
  top: 10px;
  right: 10px;
}
.addColl{
  margin: 0 auto;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ccc;
  margin-bottom: 5px;
}
.content-wrap{
  display: flex;
}
.content-wrap .ce{
  flex: 1;
  text-align: center;
  padding: 16px 0 8px 0;
}
.content-wrap .ce>.title{
  font-size: 10px;
  color: #ccc;
  margin-bottom: 4px;
}
.content-wrap .ce>.dollar{
  font-size: 24px;
}
.content-wrap .ce>.dollar span{
  font-size: 12px;
}
</style>
