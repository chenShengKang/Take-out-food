<template>
  <div>
    <div class="goods">
      <scroll>
        <div class="menu-wrapper">
          <ul >
            <li 
              v-for="(item,index) of 
              goods" :key="index"  
              class="menu-item"
              @click="menuClick(index)"
              :class="{active:currentIndex == index}"
            >
              <div class="text">
                <span class="text-span">
                  <span 
                    v-if="typeof item.type !== 'undefined' && item.type > 0  "
                    :class="ClassMap[item.type]"
                    class="icon"
                  ></span>
                  {{item.name}}
                </span>
              </div>
              
            </li>
          </ul>
        </div>
      </scroll>
      <scroll :probeType="3" ref="scroll" @scroll="scroll">
        <div class="food-wrapper">
            <ul>
              <li v-for="(item,index) in goods" :key="index" class="food-list" >
                  <h1 class="title" :ref="`goods${index}`">{{item.name}}</h1>
                  <ul >
                    <li class="food-item" v-for="(food,index) of item.foods" :key="index" @click="seletFood(food)">
                      <div class="icon">
                        <img :src="food.icon" :alt="food.info">
                      </div>
                      <div class="content">
                        <h2 class="food-title">{{food.name}}</h2>
                          <p class="desc">{{food.description}}</p>
                          <p class="extra">
                            <span class="sellCount">月售{{food.sellCount}}份</span>
                            <span class="rating">好评率{{food.rating}}%</span>
                            </p>
                          <div class="price">
                            <span class="new-price">￥{{food.price}}</span>
                            <span v-if="food.oldPrice" class="old-price">￥{{food.oldPrice}}</span>
                            
                            
                            <div class="cart-control-wrapper">
                              <cart-control :food="food"></cart-control>
                            </div>
                          
                          </div>
                          
                      </div>
                    
                    </li>
                  </ul>

              </li>
            </ul> 
          </div>
      </scroll>
    </div>
    <food-detail></food-detail>
  </div>

</template>

<script>
import Scroll from '@/components/common/bscroll/BScroll.vue'
import ShopCart from '@/components/content/cart/Cart.vue'
import CartControl from '@/components/common/cartcontrol/CartControl.vue'
import FoodDetail from '@/views/foodDetail/FoodDetail.vue'

export default {
  name:'Goods',
  props:['seller','goods'],
  components: {
    Scroll,
    ShopCart,
    CartControl,
    FoodDetail
  },
  data(){
    return {
      ClassMap: ['decrease','discount','special','invoice','guarantee'], 
      currentIndex:0,
      index:0,
      top:0,
      titleOffsetTop:[],
      deliveryPrice:'',
      minPrice:'',
      seleteFood:null,
      
    }
  },
  methods:{
    menuClick(index){
      // console.log(this.$refs[`goods${index}`][0]);\
      this.currentIndex = index
      this.top = this.$refs[`goods${index}`][0].offsetTop
      // console.log(this.$refs.scroll);
      this.$refs.scroll.scrollTo(0,this.top)
    },
    pushTitle(){
        let top;
        for(let i=1; i < 9;i++){
          top = this.$refs[`goods${i}`][0].offsetTop
          this.titleOffsetTop.push(top)
        }
    },
    scroll(position){
      let len = this.titleOffsetTop.length
      let data = this.titleOffsetTop
      position = Math.abs(position.y)
      for(let i=0; i<len; i++){ 
        if((position > data[i])){
          this.index = i + 1
        }
      }
      
    },
    seletFood(food){
      // this.$router.push('/category/detail/' + food.name)
      this.$bus.$emit('goodClick',food)
      
    }
  },
 
  watch:{
    index(newq,oldq){
      this.currentIndex = newq
    }
  },
  mounted() {
    setTimeout(() => {
      this.pushTitle()  
    },500)
    
    // this.$nextTick(() => {
    //      this.pushTitle()  
    // })
  },
  

}
</script>

<style scoped>
.goods{
  display: flex;
  position: absolute;
  top: 174px;
  left: 0;
  right: 0;
  bottom:46px;
  overflow: hidden;
  background-color: #fff;
}
.goods .menu-wrapper{
  flex: 0 0 80px;
  width: 80px;
  background-color: #f3f3f3;
}

.goods .menu-wrapper .menu-item{
  width: 100%;
  line-height: 14px;
}
.goods .menu-wrapper .menu-item .icon{
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
}
.goods .menu-wrapper .menu-item .text{
  display: table;
  width: 56px;
  height: 54px;
  margin:  auto;  
  font-size: 12px;
  
}
.goods .menu-wrapper .menu-item .text-span{
  display: table-cell;
  height: 54px;
  vertical-align: middle;
  

}
.food-wrapper{
  flex: 1;

}

.food-wrapper .food-list .title{
  color: rgb(147,153,159);
  font-size: 12px;
  line-height: 20px;
  padding: 10px;
  background-color: #f3f5f7;
  border-left: 2px solid #d9dde1;
}
.food-wrapper .food-list .icon{
  flex: 0 0 57px;
  margin-right: 10px;
  
}
.food-wrapper .food-list .food-item{
  display: flex;
  padding: 18px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 -1px 1px #ccc;
}
.food-wrapper .food-list .icon img{
  width: 100%;
  height: 100%;
}
.food-wrapper .food-list .food-item .content{
  flex: 1;
}
.food-wrapper .food-list .food-item .content .price{
  position: relative;
  
}
.cart-control-wrapper{
  position: absolute;
  right: 0;
  top: 0;
}
.food-wrapper .food-list .food-item .content .food-title{
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: rgba(7,17,27);
}
.food-wrapper .food-list .food-item .content .desc{
  margin-bottom: 8px;
  line-height: 10px;
  font-size: 10px;
  color: rgb(147,153,159);
}
.food-wrapper .food-list .food-item .content .extra .sellCount{
  margin-right: 12px;
}
.food-wrapper .food-list .food-item .content  .price .new-price{
  margin-right: 8px;
  font-size: 14px;
  color: rgb(240,20,20);
}
.food-wrapper .food-list .food-item .content  .price .old-price{
  text-decoration: line-through;
  font-size: 10px;
   color: rgb(147,153,159);
}
.active{
  background-color: #fff;
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
