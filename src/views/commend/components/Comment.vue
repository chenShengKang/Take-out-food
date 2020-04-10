<template>
  <div class="component-wrapper" >
      <div class="component" v-for="(rating,index) of ratings" :key="index" v-show="needShow(rating.rateType,rating.text)">
        <div class="rating-top">
          <div class="avatar">
            <img :src="rating.avatar" alt="">
          </div>
          <div class="info">
            <h3 class="user">{{rating.username}}</h3>
            <div class="star">
              <star :size="36" :score="rating.score"></star>
              <span class="delay-time" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
            </div>
          </div>
          <div class="commit-time">
            {{rating.rateTime | formaDate}}
          </div>
        </div>
        <div class="rating-center">
          <p>{{rating.text}}</p>
        </div>
        <div class="rating-bottom">
          <span v-for="(item,index) of rating.recommend" :key="index">
            {{item}}
          </span>
        </div>
      </div>
  </div>
</template>

<script>
import star from '@/components/common/start/Start.vue'
import { formaDate, formaDate1} from '@/common/utils.js'


export default {
  name:'Compoent',
  props:['ratings','selectType','onlyContent'],
  components:{
    star,
    
  },
  methods: {
    needShow(type,text){
      if(this.onlyContent && !text){
        return false
      } 
      if(this.selectType === 2){
        return true
      } else {
        return this.selectType === type
      }
    }
  },
  filters:{
    formaDate(item){
      let time = new Date(item)
      return formaDate(time,'yyyy-MM-dd hh:ss')
    }
  }

}
</script>

<style scoped>
.component-wrapper{
  height: 50%;
  overflow: hidden;
}

.component{
  padding: 18px;
}
.rating-top{
  display: flex;

}
.avatar{
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.avatar img{
  width: 100%;
}
.info{
  flex: 1;
}
.commit-time{
  flex: 1;
  font-size: 12px;
  text-align: right;
}
.star{
  display: flex;
}
.star .delay-time{
  vertical-align: middle;
  margin-left: 10px;
  font-size: 12px;
}
.rating-center{
  margin: 10px 0;
}
</style>
