import Vue from 'vue'
import VueRouter from 'vue-router'
import mineRouter from '../../src/router/Mine/index'
import adminRouter from '../../src/router/Admin/index'
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: 'guigui',

  routes:[
    mineRouter,adminRouter,
    {
      path:'/*',
      redirect:'/mine'
    }

  ]
})

export default router
