<template>
  <div class="commonend">
    <!-- {{seller}} -->
    <scroll class="scroll">
    
      <com-head :seller="seller"></com-head>
      <Split></Split>
      <Rating
        :select-type="selectType"
        :only-content="onlyContent"
        :desc="desc"
        :ratings="ratings"
        @set="setType"
        @toggle="toggle"
      ></Rating>
        <comment :ratings="ratings" :only-content="onlyContent" :select-type="selectType"> </comment>
    </scroll>
    
  </div>
 
</template>

<script>
import ComHead from './components/Head.vue'
import Split from '@/views/foodDetail/components/Split.vue'
import Rating from '@/views/foodDetail/components/Rating.vue'
import Comment from './components/Comment.vue'
import Scroll from '@/components/common/bscroll/BScroll.vue'

export default {
  name: 'Common',
  props:['seller','ratings'],
  components:{
    ComHead,
    Split,
    Rating,
    Comment,
    Scroll
  },
  data(){
    return {
      selectType: 2,
      onlyContent: true,
      desc:{
        all:'全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  methods: {
    setType(type){
      this.selectType = type
    },
    toggle(){
      this.onlyContent = !this.onlyContent
    }
  }

}
</script>

<style scoped>
.commonend{
  position: absolute;
  top: 174px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.scroll{
  height: 100%;
}
</style>
