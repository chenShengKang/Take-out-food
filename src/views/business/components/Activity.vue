<template>
  <div class="activity">
    <div class="activity-header">
      <h1 class="title">公共与活动</h1>
      <p class="text">
        {{bulletin}}
      </p>
    </div>
    <discount :supports="supports"></discount>
  </div>
</template>

<script>
import Discount from '@/components/common/discount/Discount.vue'
export default {
  name: 'Activity',
  props:['bulletin','supports'],
  components: {
    Discount
  }

}
</script>

<style scoped>
.title{
  padding: 16px;
}
.text{
  padding: 0 30px;
  line-height: 24px;
  color: rgb(240,20,20)
}
</style>
