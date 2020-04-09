<template>
  <div class="wrap">
    <transition name="fold">
        <div class="cart-list" v-show="listShow">
            <div class="list-header">
              <h1 class="title">购物车</h1>
              <span class="empty" @click="empty">清空</span>
            </div>
            <div class="list-content">
              <scroll class="scroll">
                <div>
                  <ul>
                    <li class="food" v-for="(item,index) of selectFoods" :key="index">
                      <span class="name">{{item.name}}</span>
                      <div class="price">
                        <span>￥{{item.price * item.count}}</span>
                      </div>
                      <div class="cartcontrol">
                        <Cart-Control :food="item"></Cart-Control>
                      </div>
                    </li>
                  </ul>
                </div>
              </scroll>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
import CartControl from '@/components/common/cartcontrol/CartControl.vue'
import scroll from '@/components/common/bscroll/BScroll.vue'
import { mapState } from 'vuex'
export default {
  name:'CartList',
  components: {
    CartControl,
    scroll
  },
  props:['bool'],
  data(){
    return {
      // listShow:true
    }
  },
  methods:{
    empty(){
      this.$store.commit('empty')
      this.$emit('empty')
    }
  },
  computed:{
    ...mapState(["selectFoods"]),
    listShow(){
      if(this.bool){
        if(this.selectFoods.length > 0){
          return this.bool
        }
      }
      
    }
  },


}
</script>

<style scoped>
.wrap{
  position: relative;
}
  .cart-list{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: -1;
    width: 100%;
    
  }
  .list-header{
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background-color: #f3f5f7;
    border-bottom: 1px solid rgba(7,17,27,.1);
  }
   .list-header .title{
     float: left;
     font-size: 14px;
     color: #333;
   }
   .cartcontrol{
     position: absolute;
     right: 0;
     top: 50%;
     transform: translateY(-50%)
   }
   .list-header .empty{
     float: right;
     font-size: 12px;
     color: rgb(0,160,220);
   }
   .list-content{
     /* padding: 0 18px; */
     
     background-color: #fff;
     overflow: hidden;

   }
   .scroll{
      max-height: 217px;
   }
   .food{
     position: relative;
     padding: 12px 18px;
     box-sizing: border-box;
     box-shadow: 0 -1px 1px #ccc;
   }
   .name{
     line-height: 24px;
     font-size: 14px;
     color: #333;
   }
   .price{
     position: absolute;
     right: 90px;
     bottom: 12px;
     line-height: 24px;
     color: red;
   }
  
  .fold-leave-active{
      transition: all .5s;
      transform: translate3d(0, 100% ,0)
  }
  .fold-enter-active{
      transition: all .5s;
      transform: translate3d(0, 0 ,0)      
  }
  .fold-leave{
      transform: translate3d(0, 0 ,0)  
  }
  .fold-enter{
    transform: translate3d(0, 100% ,0)
    
  }
</style>
