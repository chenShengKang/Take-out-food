import Vue from 'vue'
import VueRouter from 'vue-router'
const Category = () => import('@/views/category/Category.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/category'
  },
  {
    path:'/category/',
    name: 'Category',
    component: Category,
    children:[
      
    ]
  },
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
