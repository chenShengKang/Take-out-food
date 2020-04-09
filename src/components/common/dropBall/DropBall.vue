<template>
   <div class="drop-wrapper">
        <transition-group
         name="ball" tag="div"
        v-on:before-enter="beforeB"
          v-on:enter="enterB"
          v-on:after-enter="afterB"
        > 
          <div class="ball" v-for="(ball,index) of balls" :key="index" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition-group>
      </div>
</template>

<script>
export default {
  name: 'DropBall',
  data(){
    return {
       balls:[
        {show:false, el:null},
        {show:false, el:null},
        {show:false, el:null},
        {show:false, el:null},
        {show:false, el:null},
        {show:false, el:null},
      ],
      dropBalls:[]
    }
  },
  methods: {
    dropB(el){
      // for(let i=0; i < this.balls.length; i++){
      //   let ball = this.balls[i]
      //   if(ball.show === false){
      //     ball.show = true
      //     ball.el = el
      //     this.dropBalls.push(ball)
      //     return 
      //   }
      // }
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
    beforeB(el){
      let count = this.balls.length
      while(count--){
        let ball = this.balls[count]
        if(ball.show){
          let rect = ball.el.getBoundingClientRect();
          let y = -(window.innerHeight - rect.top - 22);
          let x = rect.left -22
          el.style.transform = `translate3d(0,${y}px,0`;

          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.transform =  `translate3d(${x}px,0,0)`
        }
      }
    },
    enterB(el, done){
       let rf = el.offsetHeight;
      this.$nextTick(() => {
        el.style.transform = 'translate3d(0, 0, 0)';
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.transform = 'translate3d(0, 0, 0)';
        el.addEventListener('transitionend',done)
      })
    },
    afterB(el){
      el.style.display = 'none'
      let ball = this.dropBalls.shift()
      ball.el = null
      ball.show = false
    }
  },
 
 mounted(){
    // this.$bus.$on('cart', res=> {
    //   console.log(res);
    //   this.dropB(res)      
    // })
  },

}
</script>

<style scoped>
.drop-wrapper .ball{
  position: fixed;
  bottom: 22px;
  left: 32px;
  z-index: 999;
}
.drop-wrapper .ball .inner{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: all .4s;
  background-color: red;
}
.ball-enter-active{
   transition: all .4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
}
</style>
