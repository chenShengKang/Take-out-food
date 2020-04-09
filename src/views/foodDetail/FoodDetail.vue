<template>
  <transition name="detail">
    <div class="food" v-show="showFlag"> 
      <Scroll class="scroll">
        <div class="food-content">
          <div class="img-head">
            <img :src="foodList.image" alt="">
            <div class="back" @click="backTo">
              &lt;
            </div>
          </div>
          <div class="content">
            <h1 class="title">{{foodList.name}}</h1>
            <div class="detail">
              <span class="sell-count">月售{{foodList.sellCount}}份</span>
              <span class="rating">好评率{{foodList.rating}}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{foodList.price}}</span>
              <span v-show="foodList.oldPrice" class="oldPrice">￥{{foodList.oldPrice}}</span>
            </div>
          </div>
          <div class="cartcontrol-wrapper">
            <Cart-Control :food="foodList"></Cart-Control>
          </div>
          <div class="buy" @click="addFood" v-show="!foodList.count || foodList.count === 0">加入购物车</div>
        </div>
        <Split></Split>
        <div class="info" v-show="foodList.info">
          <h1 class="info-title">商品信息</h1>
          <p class="info-text">{{foodList.info}}</p>
        </div>
        <Split></Split>
        <div class="rating">
          <h1 class="rating-title">商品评价</h1>
          <Rating 
            :select-type="selectType"
            :only-content="onlyContent"
            :desc="desc"
            :ratings="foodList.ratings"
            @set="setType"
            @toggle="toggle"
          ></Rating>
        </div>
        <div class="rating-wrapper">
          <ul v-show="foodList.ratings && foodList.ratings">
            <li v-show="needShow(rating.rateType,rating.text)" v-for="(rating,index) of foodList.ratings" :key="index" class="rating-item"> 
              <div class="user">
                <span class="name">{{rating.username}}</span>
                <img class="avatar" width="12" height="12" :src="rating.avatar" alt="">
              </div>
              <div class="time">{{rating.rateTime | formaDate}} </div>
              <p class="raitng-text">
                <span>{{rating.text}}</span>
              </p>
            </li>
          </ul>
          <div class="no-rating" v-show="!foodList.ratings || !foodList.ratings.length" >
            暂无评论
          </div>
        </div>
      </Scroll>
    </div>
  </transition>
</template>

<script>
import Scroll from '@/components/common/bscroll/BScroll.vue'

import CartControl from '@/components/common/cartcontrol/CartControl.vue'
import Split from './components/Split.vue'
import Rating from './components/Rating.vue'

import { formaDate, formaDate1} from '@/common/utils.js'
const All = 2;
const POSITIVE = 0;
const NAGATIVE = 1;
export default {
  name: 'FoodDetail',
  data(){
    return {
      foodList:[],
      showFlag:false,
      selectType: All,
      onlyContent: true,
      desc:{
        all:'全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  components:{
    Scroll,
    CartControl,
    Split,
    Rating
  },
  methods:{
    backTo(){
      this.showFlag=false
    },
    addFood(){
      this.$store.commit('addCart',this.foodList)
    },
    show(){
      this.showFlag = true
      this.selectType = 2
      this.onlyContent = true
    },
    needShow(type,text){
      if(this.onlyContent && !text){
        return false
      }
      if(this.selectType === 2 ){
        return true
      }else{
        return type === this.selectType
      }
    },
    setType(type){
      this.selectType = type
      console.log(type);
    },
    toggle(type){
      this.onlyContent = !this.onlyContent;
      
      console.log(type);
    }
  },
  computed:{
    isZhan(rating){
      if(rating.rateType){
        return 'dowm'
      }
      return  'up'
    }
  },
  filters:{
    formaDate(item){
      let date = new Date(item)
      return formaDate1(date,'yyyy-MM-dd hh:mm')
    }
  },
  created(){
    this.$bus.$on('goodClick',res => {
      this.foodList = res
      this.show()
    })
    
  },
 
  // filters:{
  //   time(value){

  //   }
  // }
 
}
</script>

<style scoped>
.scroll{
  width: 100%;
  height: 100%;
}
.food{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 48px;
  z-index: 3;
  background-color: #fff;
}
.food-content{
  position: relative;
}
.img-head{
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 80%;
}
.back{
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  font-size: 20px;
  color: #fff;
}
.img-head img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
}
.content{
  padding: 18px;
}
.title{
  line-height: 14px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
}
.detail{
  margin-bottom: 18px;
  line-height: 10px;
  font-size: 0
}
.sell-count,
.rating{
  font-size: 10px;
  color: rgb(147,153,159);
}
.sell-count{
  margin-right: 12px;
}
.price{
  font-weight: 700;
  line-height: 24px;
}
.now{
  margin-right: 8px;
  font-size: 14px;
  color: rgb(240,20,20);
}
.old{
  text-decoration: line-through;
  font-size: 10px;
  color: rgb(147,153,159);
}
 .buy{
   position: absolute;
   right: 18px;
   bottom: 18px;
   z-index: 10;
   height: 24px;
   line-height: 24px;
   padding: 0 12px;
   box-sizing: border-box;
   font-size: 10px;
   color: #fff;
   background-color: rgb(0,160,220);
   border-radius: 10px;

 }


.info{
  padding: 18px;
}
.info-title{
  line-height: 14px;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
}
.info-text{
  line-height: 24px;
  padding: 0 8px;
  size: 12px;
  color: rgb(77,85,93);
  text-indent: 10px;
  

}

.rating{
  padding-top: 18px;
}
.rating .rating-title{
  line-height: 14px;
  margin-left: 18px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
}
.rating-item{
  position: relative;
  padding: 10px 0;
  box-shadow: 0 -1px 1px #ccc;
}
.no-rating{
  padding: 16px 0;
  font-size: 12px;
  color: #ccc;
}
.user{
  position: absolute;
  right: 0;
  top: 16px;
  line-height: 12px;
}
.name{
  display: inline-block;
  font-size: 10px;
  margin-right: 5px;
}
.time{
  margin-bottom: 6px;
  line-height: 12px;
  font-size: 12px;
}




 .cartcontrol-wrapper{
   position: absolute;
    right: 18px;
   bottom: 18px;
 }
.detail-enter-active{
  transition: all .5s;
  transform: translate3d(0,0,0)
}
.detail-enter{
  transform: translate3d(100%,0,0)
}
.detail-leave-active{
  transition: all .5s;
  transform: translate3d(100%,0,0);
  
}
.detail-leave{
  transform: translate3d(0,0,0);
}
  
  
</style>
