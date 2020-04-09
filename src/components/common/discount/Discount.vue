<template>
  <div class="discount-wrap">
    <ul>
      <li class="discount-item" v-for="item of supports" :key="item.type">
        <span class="icon" :class="supportsType(item.type)"></span>
        <span>{{item.description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['supports'],
  methods: {
    supportsType(type){
      let supportsType = null
      switch(type){
        case 0 : 
            supportsType='decrease';
            break;
        case 1 : 
            supportsType='discount';
            break;
        case 2 : 
            supportsType='special';
            break;
        case 3 : 
            supportsType='invoice';
            break;
        case 4 : 
            supportsType='guarantee';
            break;
      }
      return supportsType
    }
  }

}
</script>

<style scoped>
.discount-wrap{
  padding: 10px 24px;
}
.discount-wrap .discount-item{
  padding: 16px;
  box-shadow: 0 1px 1px rgba(7,17,27,0.1);
  box-shadow: 0 -1px 1px rgba(7,17,27,0.1);
}
.icon{
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 10px;
}
.decrease{
  background: url(~@/assets/img/decrease_2@2x.png) no-repeat center/100%

}
.discount{
  background: url(~@/assets/img/discount_2@2x.png) no-repeat center/100%

}
.special{
  background: url(~@/assets/img/special_2@2x.png) no-repeat center/100%

}
.invoice{
  background: url(~@/assets/img/invoice_2@2x.png) no-repeat center/100%

}
.guarantee{
  background: url(~@/assets/img/guarantee_2@2x.png) no-repeat center/100%

}
</style>
