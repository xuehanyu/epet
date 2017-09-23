import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home_page/home_page.vue'
import main from '../../src/components/Main/Main.vue'
import health from '../../src/components/Health/Health.vue'
import food from '../../src/components/Food/Food.vue'
import uses from '../../src/components/Uses/Uses.vue'
import beauty from '../../src/components/Beauty/Beauty.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/health',
      component: health
    },
    {
      path: '/food',
      component: food
    },
    {
      path: '/uses',
      component: uses
    },
    {
      path: '/beauty',
      component: beauty
    },
    {
      path: '/',
      redirect :'/home'
    }
  ]
})
