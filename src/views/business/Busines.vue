<template>

<div class="busines">
  <scroll class="scroll">
    <div>
      <busines-head :seller="seller"> </busines-head>
      <Split></Split>
      <activity :bulletin="seller.bulletin" :supports="seller.supports"></activity>
      <Split></Split>
        <store-view :pics="seller.pics"></store-view>
      <Split></Split>
      <information :infos="seller.infos"></information>
    </div>
  </scroll>
</div>

</template>

<script>
import BusinesHead from './components/BusinesHead.vue'
import Split from '@/views/foodDetail/components/Split.vue'
import Activity from './components/Activity.vue'
import StoreView from './components/StoreView.vue'
import Information from './components/Information.vue'
 
import Scroll from '@/components/common/bscroll/BScroll.vue'

export default {
  name: 'Busines',
  props: ['seller'],
  components: {
    BusinesHead,
    Split,
    Activity,
    StoreView,
    Information,
    Scroll
  }

}
</script>

<style scoped>
.busines{

 height: calc(100% - 223px);
 overflow: hidden;
}
.scroll{
  height: 100%;
}
</style>
