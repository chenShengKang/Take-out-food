<template>
  <div class="wrapper" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Bscroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUp:{
      type:Boolean,
      default:false,
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  methods: {
    scrollTo(x, y, time=300){
      this.scroll.scrollTo(x, -y, time);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap,{
      click:true,
      probeType: this.probeType,
      pullUpload: this.pullUp
    })
    this.scroll.on('scroll',position => {
      this.$emit('scroll', position)
    })
  }

}
</script>

<style scoped>

</style>
