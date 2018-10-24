import Vue from 'vue'
import Router from 'vue-router'
import MyTabs from '@/pages/my-tabs'
import MyDemoProvide from '@/pages/my-demo-provide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'my-tabs',
      component: MyTabs
    },
    {
      path: '/my-demo-provide',
      name: 'my-demo-provide',
      component: MyDemoProvide
    }
  ]
})
