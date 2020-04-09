import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  totalPrice:0,
  selectFoods:[]

}

export default new Vuex.Store({
  state,
  mutations: {
    addCart(state,payload,callback){
      let that = this
      // if(state.selectFoods.length <= 0){
      //   payload.count++
      //   state.selectFoods.push(payload) 
      // } else {
        let flag = false
        state.selectFoods.some((item,index) => {
          if(item.name === payload.name){
            let count = ++item.count
            Vue.delete(item,'count')
            Vue.set(item,'count',count) 
            flag = true;
            return true
          }
        })
        if(!flag){
          payload.count = 1
          console.log(payload);
          state.selectFoods.push(payload)
          console.log(state.selectFoods);
        }
        
      // }
    },
    decrease(state,payload,callback){
      let flag = false;
      state.selectFoods.some((item,index) => {
        if(item.name === payload.name){
          let count = item.count          
          if(item.count > 0){
            let count = --item.count
            Vue.delete(item,'count')
            Vue.set(item,'count',count)
          }else {
            let count = 0
            Vue.delete(item,'count')
            Vue.set(item,'count',count)
          }
          flag = true;
          return true
        }
      })
      
    },
    empty(state){
      state.selectFoods = []
    }
  },
  actions: {
  },
  modules: {
    
  },
  getters: {
    getAllPricexxx(state){
      let allPrice = 0;
      state.selectFoods.forEach(item => {
        allPrice += item.price * item.count
      })
      return allPrice
    }
  }
})
