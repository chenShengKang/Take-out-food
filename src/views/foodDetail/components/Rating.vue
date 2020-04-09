<template>
  <div class="ratings">
    <div class="rating-type">
      <span @click="set(2)" class="block all" :class="{active:selectType===2}">
        {{desc.all}}
        <span>{{NewRatings.length}}</span>
      </span>
      <span @click="set(0)"  class="block positive"  :class="{active:selectType===0}">
        {{desc.positive}}
        <span>{{positive}}</span>
        </span>
      <span @click="set(1)" class="block negative"  :class="{active:selectType===1}">
        {{desc.negative}}
        <span>{{negative}}</span>
        </span>
    </div>
    <div @click="toggle" class="switch" :class="{active:onlyContent}">
      <span class="icon"></span>
      <span class="switch-text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    ratings:{
      type: Array,      
    },
    selectType: {
      type: Number,
    
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default(){
        return {
          all:'全部',
          positive:'满意',
          negative:'吐槽'
        }
      }
    }
  },
  data(){
    return {
      NewRatings:[]
    }
  },
  methods :{
    set(type){
      // this.selectType = type
      this.$emit('set',type)
    },
    toggle(){
      // this.onlyContent = !this.onlyContent;
      this.$emit('toggle',this.onlyContent)
    }
  },
  computed: {
    positive() {
      return this.NewRatings.filter((item) => {
        return item.rateType === 0
      }).length

    },
    negative() {
      return this.NewRatings.filter((item) => {
        return item.rateType === 1
      }).length
    },
    len(){
      return 0
    }
  },
  watch:{
    ratings(newV,oldV){
      this.NewRatings = newV
      console.log( this.NewRatings);
    }
  }

}
</script>

<style scoped>
.rating-type{
  padding: 18px 0;
  box-shadow: 0 -1px 1px rgba(7,17,27,.1);
}
.block{
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 1px;
  color: rgb(77,85,93);
  font-size: 12px;
}
.block.positive{
  background-color: rgba(0,160,220,0.2);
}
.block.positive.active{
  background-color: rgb(0,160,220)
  
} 
.block.negative.active{
  background-color: rgb(0,160,220)
  
}
.block.all{
    background-color: rgba(0,160,220,0.2);
}
.block.all.active{
  background-color: rgb(0,160,220)
  
}
.block.negative{
  background-color: rgba(77,85,93,0.2);
  
}
.switch{
  padding: 0 0 10px 10px;
  line-height: 24px;
  border-bottom: 1px solid rgba(7,17,27,.1);
  color:rgb(147,153,159);
}
.switch.active .icon{
  background-color: rgb(0,160,220);
  
}
.switch.active .switch-text{
  color: rgb(0,160,220);

}
.switch .switch-text{
  display: inline-block;
  font-size: 12px;
}
.icon{
  display: inline-block;
  margin-right: 10px;
  background-color: #ccc;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
