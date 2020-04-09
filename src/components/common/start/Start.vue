<template>
  <div class="star" :class="starType">
    <span v-for="(itemclass,index) of itemclasses" :class="itemclass" :key="index" class="star-item"></span>
  </div>
</template>

<script>
const LEN = 5;
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  name: 'Start',
  props:{
    size:{
      type:Number,
      default:0
    },
    score: {
      type:Number,
      default: 0
    }
  },
  computed :{
    starType(){
      return 'star-' + this.size;
    },
    itemclasses(){
      let result = []
      let score = Math.floor(this.score * 2) / 2;
      let hasDEcimal = score % 1 !== 0;
      let integer = Math.floor(score)
      for(let i=0; i<integer;i++){
        result.push(CLS_ON)
      }
      if(hasDEcimal){
        result.push(CLS_HALF)
      }
      while(result.length < LEN){
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style scoped>
.star{
  font-size: 0;
}
.star-item{
  display: inline-block;
}
.star-48{
  display: flex;
  width: 45%;
  justify-content: space-around;
  font-size: 24px;
  
}
.star-36{
  font-size: 18px;
  justify-content: space-around;
  font-size: 24px;
}
.star-48 .star-item{
  width: 20px;
  height: 20px;
  /* margin:0  22px; */
  background-size: 20px 20px;
  
}
.star-48 .star-item.on{
  background-image: url(~@/assets/img/star48_on@2x.png)

}
.star-48 .star-item.half{
  background-image: url(~@/assets/img/star48_half@2x.png)
  
}
.star-48 .star-item.off{
  background-image: url(~@/assets/img/star48_off@2x.png)
  
}
.star-48 .star-item{
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
.star-36 .star-item{
  width: 12px;
  height: 12px;

  background-size: 12px 12px;
}
.star-36 .star-item.on{
  background-image: url(~@/assets/img/star36_on@2x.png)

}
.star-36 .star-item.half{
  background-image: url(~@/assets/img/star36_half@2x.png)
  
}
.star-36 .star-item.off{
  background-image: url(~@/assets/img/star36_off@2x.png)
  
}
/* .star-24{
  
}
.star-24 .star-item{

} */
</style>
