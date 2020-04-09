<template>
  <div class="category">
    <category-header :seller='seller'></category-header>
    <tab-bar :tabbar="tabBarClick"></tab-bar>
    <goods v-show="currentIndex === 0" :goods="goods" :seller="seller"></goods>
    <Commonend v-show="currentIndex === 1" :seller="seller" :ratings="ratings"></Commonend>
    <Busines v-show="currentIndex === 2" :seller="seller"></Busines>
    <cart :devp="seller.deliveryPrice" :minp="seller.minPrice"> </cart>
  </div>
</template>

<script>
import CategoryHeader from './components/Header.vue'
import TabBar from './components/TabBar.vue'
import Goods from './components/Goods.vue'
import Commonend from '@/views/commend/Commonend.vue'
import Busines from '@/views/business/Busines.vue'
import Cart from '@/components/content/cart/Cart.vue'
import { getCategoryDate } from '@/network/category.js'

export default {
  name: 'Category',
  components:{
    CategoryHeader,
    TabBar,
    Goods,
    Commonend,
    Busines,
    Cart,
  },
  data(){
    return {
      seller:'',
      goods: null,
      ratings:null,
      currentIndex:0
    }
  },
  methods:{
    getCategoryDate(){
      getCategoryDate().then(res => {  
        this.seller=res.seller
        this.goods=res.goods
         this.ratings=res.ratings  
         console.log(res);
      })
    },
    tabBarClick(index){
      this.currentIndex = index
    }
  },
  created(){
    this.getCategoryDate()
    this.$bus.$on('tabbar',res => {
      this.$nextTick(()=>{
        this.tabBarClick(res)
      })
    })
  }

}
</script>

<style scoped>
.category{
  height: 100vh;
  overflow: hidden;
}
</style>
