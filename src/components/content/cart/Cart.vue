<template>
  <div class="cart">
    <div class="shopcart" @click="cartClick">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{high:getAllPrice > 0}"></div>
            <div class="foodCount" v-show="getAllPrice > 0">{{getCount}}</div>
          </div>
          <div class="price" :class="{highPrice:getAllPrice > 0}" > {{getAllPrice}}元</div>
          <div class="desc">另外需要配送费￥{{devp}}</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="{highInfo:getAllPrice - this.minp >= 0}" >
            {{minPrice}}
          </div>
        
        </div>
        <div class="ball-wrapper">
          <transition-group name="drop" tag="div"
            v-on:before-enter="beforeEnter"
            v-on:enter="dropEnter"
            v-on:after-enter="afterEnter"
          >
            <div class="ball" v-for="(ball,index) of balls" v-show="ball.show" :key="index">
              <div class="inner inner-hook"></div>
            </div>
          </transition-group>
        </div>
        <drop-ball ref="dropball"></drop-ball>
      </div> 
    </div>
    <cart-list :bool="bool" @empty="empty"></cart-list>
  </div> 
  
</template>

<script>
import DropBall from '@/components/common/dropBall/DropBall.vue'
import CartList from './CartList.vue'
export default {
  name:'Cart',
  props: ['devp','minp'],
  components: {
    DropBall,
    CartList
  },
  data(){
    return {
      tag:'还差',
      balls:[
        {show:false, el:null},
        {show:false, el:null},
        {show:false, el:null},
        {show:false, el:null},
        {show:false, el:null},
        {show:false, el:null},
      ],
      dropBalls:[],
      bool:false
    }
  },
  methods: {
    _drop(el){
      for(let i=0; i< this.balls.length; i++){
        let ball = this.balls[i]
        if (ball.show === false){
          this.$delete(ball,'show');
          this.$set(ball,'show',true)
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeEnter (el, done) {
      let count = this.balls.length;
      while (count--) {
        let ball = this.balls[count];
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect();
          let x = rect.left - 32;
          let y = -(window.innerHeight - rect.top - 22);
          el.style.display = '';
          el.style.transform = `translate3d(0,${y}px,0`;
          el.style.webkitTransform = `translate3d(0,${y}px,0`;
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
          inner.style.transform = `translate3d(${x}px,0,0)`;
          // console.log(el);
        }
      }
    },
    dropEnter (el, done) {
      /* eslint-disable no-unused-vars */
      /* 触发浏览器重绘; */
      let rf = el.offsetHeight;
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0, 0, 0)';
        el.style.transform = 'translate3d(0, 0, 0)';
        let inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.webkitTransform = 'translate3d(0, 0, 0)';
        inner.style.transform = 'translate3d(0, 0, 0)';
        el.addEventListener('transitionend', done);
        // done();
      });
    },
    afterEnter (el) {
      el.style.display = 'none';
      let ball = this.dropBalls.shift();
      ball.show = false;
      ball.el = null;
    },
    cartClick(){
      this.bool = !this.bool
    },
    empty(){
      this.bool = false;     
    }
  },
  computed :{
    minPrice(){
      if(this.getAllPrice === 0){
        return `￥${this.minp}元起送`
      }else if (this.getAllPrice < this.minp){
        let diff = this.minp - this.getAllPrice;
        return `还差￥${diff}元起送`
      }else{
        return '去结算'
      }
    },
    getAllPrice() {
      let allPrice = 0;
      this.$store.state.selectFoods.forEach(item => {
        allPrice += item.price * item.count
      })
      return allPrice
    },
    getCount() {
      let count = 0
      this.$store.state.selectFoods.forEach(item => {
        count += item.count
      })
      return count
    }

  },
  mounted(){
    this.$bus.$on('cart', res=> {
      // console.log(res);
      this._drop(res)
      // this.$refs.dropball.dropB(res)
      
    })
  },
  
}
</script>

<style  scoped>
.cart{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.shopcart{
  /* position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;*/
  height: 48px; 
  background-color: #141d27;
}
.shopcart .content{
  display: flex;
  position: relative;
  z-index: 10;
}
.shopcart .content-left{
  flex: 1;
  font-size: 0;
}
.shopcart .content-left .logo-wrapper{
  display: inline-block;
  position: relative;
  top: -10px;
  margin: 0 12px;
  padding: 6px;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #141d27;
}
.shopcart .content-left .logo-wrapper .foodCount{
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 16px;
  font-size: 9px;
  font-weight: 600;
  color: #fff;
  background-color: rgb(240,20,20);
  box-shadow: 0 4ox 8px 4 rgba(0,0,0,.4);
}
.shopcart .content-left .logo-wrapper .logo{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #2b343c;
}
.shopcart .content-left .price{
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
  line-height: 24px;
  padding-right: 12px;
  box-sizing: border-box;
  border-right: 1px solid rgba(255,255,255,.1);
  font-size: 16px;
  font-weight: 600;
  color: rgba(255,255,255,.4);
 
  
}
.shopcart .content-left .desc{
  display: inline-block;
  line-height: 24px;
  vertical-align: top;
  margin-left: 12px;
  margin-top: 12px;
  color: rgba(255,255,255,.4);
  font-size: 10px;
  
  
}
.shopcart .content-right{
  flex: 0 0 105px;
  width: 105px;
}
.shopcart .content-right{
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  color: rgba(255,255,255,.4);
  background-color: #2b333b;
}
.shopcart .content-left .logo-wrapper .logo.high{
  background-color: rgb(0,120,220);
}
.shopcart .content-left .price.highPrice{
  color: #fff;
}
.highInfo{
   background-color: #00b43c;
   color: #fff;
   font-size: 16px;
}
.ball-wrapper .ball{
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 999;
}

.ball-wrapper .ball .inner{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgb(0, 160, 220);
  transition: all .4s linear;
  
}

.drop-enter-active{
   transition: all .4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
}
 /* .drop-enter{
  transform: translate3d(0, -400px,0)
}
 .drop-enter-to{
  transform: translate3d(0,0,0)
}
.drop-enter-to .inner{
  transform: translate3d(0,0,0)
} */

</style>
