<template>
  <div class="overview">
    <div class="left">
      <h1 class="left-score">{{seller.score}}</h1>
      <div class="title">综合评分</div>
      <div class="rank">高于周边商家{{seller.sellCount}}%</div>
    </div>
    <div class="right">
      <div class="score-wrapper">
        <span class="right-title">服务态度</span>
        <star  :size="48" :score="seller.serviceScore"></star>
        <span class="score">{{seller.serviceScore}}</span>
      </div>
      <div class="score-wrapper">
          <span class="right-title">商品评分</span>
          <star  :size="48" :score="seller.foodScore"></star>
          <span class="score">{{seller.foodScore}}</span>
      </div>
      <div class="delay-time ">
        <span class="right-title">送达时间</span>
        <span >{{seller.deliveryTime}}分钟</span>
      </div>
    </div>
  </div>

</template>

<script>
import star from '@/components/common/start/Start.vue'

export default {
  name: 'Head',
  props:['seller'],
  components:{
    star
  }

}
</script>

<style scoped>
  .overview{
    display: flex;
    padding: 18px 0;
  }
  .left{
    flex: 0 0 137px;
    width: 147px;
    border-right: 1px solid #ccc;
    text-align: center;

  }
  .rank{
    color: rgb(7,17,27);
  }
  .left-score{
    color: rgb(255,153,0);
    line-height: 24px;
  }
  .score{
    line-height: 24px;
    color: rgb(255,153,0);
    font-size: 12px;
    margin-right: 30px;
  }
  .right{
    flex: 1;
    padding-left: 24px;
  }
  .score-wrapper{
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    line-height: 18px;
    font-size: 0;

  }
  .delay-time{
    display: flex;
    font-size: 12px;
  
  }
  .delay-time .right-title{
    margin-right: 20px;
  }
    .score-wrapper .right-title{
      font-size: 12px;
    }
    .right-title{
      font-weight: 700;
    }
    
</style>
