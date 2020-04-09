<template>
  <div class="cart-control">
    <transition name="fade">
     <div  v-show="foodCount > 0"  class="cart-decrease" @click="decrease">
       <span class="inner">-</span> 
      </div>   
    </transition>
    <transition name="move">
      <div class="cart-count" v-show="foodCount > 0">{{foodCount}}</div>
    </transition>
    <div class="cart-increase" @click="addCart($event)" ref="increase">+</div>
    
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'CartControl',
  props: ['food'],
  data(){
    return {

    }
  },
  methods: {
    addCart(event) {
      this.$store.commit('addCart',this.food)  
      this.$bus.$emit('cart',event.target)
    },
    decrease() {
      this.$store.commit('decrease',this.food) 
    },
    
    
  },
  transitions: {
      ball: {
        
        
      }
  },
   computed:{
    foodCount(){
      let count = 0
      let that = this
      if(this.$store.state.selectFoods.length > 0){
        this.$store.state.selectFoods.some((item) => {
          if(item.name === that.food.name){
            count = item.count
          }
        })
      }
      return count
    }
  },
  mounted() {
    this.food.count = 1
  }



}
</script>

<style scoped>
.cart-decrease,
.cart-count,
.cart-increase{
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  text-align: center;
}
/* .cart-decrease{
  margin-right: 16px;
} */
/* .cart-count{
  position: absolute;
  left: 20px;
  top: 4px;
} */
.fade-enter,
.fade-leave-to{
  transform: translate3d(34px,0,0);
}
.fade-enter-active,
.fade-leave-active {
  transition: transform .4s;
 
}

	.move-enter, .move-leave-to {
    opacity: 0;
	}
  .move-enter-active, .move-leave-active {
    transition: opacity .5s linear ;   
	}
.cart-decrease, 
.cart-increase{
  border: 3px solid rgb(0,160,220);
  border-radius: 50%;
  color: #333;
  

}
.cart-increase{
  background-color: rgb(0,160,220);
  color: #fff;
}


</style>
