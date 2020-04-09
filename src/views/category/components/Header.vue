<template>
  <div class="category-header">
    <div class="content">
      <div class="img">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="main">
        <div class="title"><img class="brand" src="" alt=""><span class="name">{{seller.name}}</span></div>
        <div class="desc">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="suppoart" v-if="seller.supports">
          <span class="icon" :class="ClassMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support" @click="supportClick">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="sell-icon icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin">
      <span class="title"></span>
      <span class="text">{{seller.bulletin}}</span>
    </div>
    <div class="bg">
      <img :src="seller.avatar" alt="" width="100%">
    </div>
    <detail 
      v-show="detailShow" 
      :seller="seller" 
      @detailClose='detailClose'
      :class-map="ClassMap"
    ></detail>
  </div>
</template>

<script>

import Detail from './Detail.vue'

export default {
  name: 'Header',
  props:['seller'],
  components: {
    Detail
  },
  data(){
    return {
      ClassMap:['decrease','discount','special','invoice','guarantee'],
      sellerData:null,
      detailShow:false
    }
  },
  methods:{
    supportClick(){
      this.detailShow = true;
    },
    detailClose(){
      this.detailShow = false;
      
    },
 
  },

}
</script>

<style scoped>

.category-header{
  position: relative;
  background-color: rgba(7,17,27,.5);
  box-sizing: border-box;
}
.content{
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 24px 12px 18px 24px
}

.img{
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 2px;
  overflow: hidden;
}
.img img{
  width: 100%;
}
.main{
  flex: 1;
}
.title{
  margin: 2px 0 8px 0;
}
.title .brand{
  display: inline-block;
  margin-right: 6px;
  vertical-align: top;
  width: 30px;
  height: 18px;
  background: url(~@/assets/img/brand@2x.png) no-repeat center/100%
  
}
.name{
  font-size: 16px;
  color: rgb(255,255,255);
  font-weight: 600;
  line-height: 17px;
}
.main .desc{
  font-size: 12px;
  color: rgba(255,255,255,.8 );
  line-height: 12px;
  margin-bottom: 10px;
}
.suppoart .icon{
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  margin-right: 5px;
}
.suppoart .text{
  line-height: 12px;
  color: rgba(255,255,255,.8 );
  font-size: 12px;
}
.support{
  position: absolute;
  right: 12px;
  bottom: 18px;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  border-radius: 14px;
  background-color: rgba(0,0,0,.2);
  text-align: center;
  color: #fff;
  font-size: 10px;
}
.bulletin{
  height: 28px;
  line-height: 28px;
  padding: 0 22px 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
  background: rgba(7,17,27,.2);
  color: #fff;
}
.bulletin .title{
  display: inline-block;
  margin-right: 4px;
  width: 22px;
  height: 12px;
  vertical-align: -10px;
  background: url(~@/assets/img/bulletin@2x.png) no-repeat center/100%;
}
.bg{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  filter: blur(10px);
}
.bg img{
  width: 100%;
  height: 100%;
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
.clearfix::after{
  content: ' ';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;  
}
</style>
