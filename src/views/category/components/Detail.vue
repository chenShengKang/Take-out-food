<template>
   <div class="detail"   @touchmove.prevent>
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <span class="name">{{seller.name}}</span>
          <div class="star-wrapper">
           <star :score="seller.score" :size="48"></star>     
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports" v-if="seller.supports">
            <li class="support-item" v-for="(item,index) of seller.supports" :key="index">
              <span class="icon" :class="ClassMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
           <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <p class="bulletin-text">{{seller.bulletin}}</p>
        </div>
      </div>
      <div class="detail-close" @click="detailClose">x</div>
    </div>
</template>

<script>
import star from '@/components/common/start/Start.vue'

export default {
  name: 'Detail',
  props:['seller','ClassMap'],
  methods: {
    detailClose(){
      this.$emit('detailClose')
    }
  },
  components:{
    star,
    
  }

}
</script>

<style scoped>
.detail{
  position: fixed;;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(7,17,27,.8);
}
.detail-wrapper{
  display: flex;
  justify-content: center;
  position: relative;

  min-height: calc(100% - 64px);
  
}
.detail .icon{
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 10px;
}
.detail .supports{
  width: 80%;
  margin: 0 auto;
  line-height: 24px;
  text-align: left;
  color: rgba(255,255,255,.8 );
}
.detail-main{
  width: 100%;
  text-align: center;
  color: rgb(255,255,255);

}
.detail-wrapper .title{
  display: flex;
  width: 80%;
  margin: 10px auto 24px auto;
}
.detail-wrapper .line{
  flex: 1;
  position: relative;
  top: -8px;
  border-bottom: 1px solid rgba(255,255,255,.2);
}
.detail-wrapper .title .text{
  padding: 0 12px;
}
.bulletin-text{
  width: 80%;
  margin: auto;
}
.detail-wrapper .bulletin .text{
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  
}
.star-wrapper{
  display: flex;
  justify-content: center;
  margin: 10px 0;

}
.detail-main{
  margin-top: 64px;
  padding-bottom: 64px;
}
.detail-main name{
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: rgb(255,255,255);
  text-align: center;
}
.detail-close{
  position: relative;
  width: 32px;
  height: 32px;
  margin: -64px auto 0 auto;
  font-size: 32px;
  clear: both;

}

.decrease{
  background: url(~@/assets/img/decrease_2@2x.png) no-repeat center/100%

}
.discount{
  background: url(~@/assets/img/discount_2@2x.png) no-repeat center/100%

}
.special{
  background: url(~@/assets/img/special_2@2x.png) no-repeat center/100%

}
.invoice{
  background: url(~@/assets/img/invoice_2@2x.png) no-repeat center/100%

}
.guarantee{
  background: url(~@/assets/img/guarantee_2@2x.png) no-repeat center/100%

}
</style>
