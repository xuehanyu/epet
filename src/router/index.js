import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home_page/home_page.vue'
import main from '../components/Main/Main.vue'
import health from '../components/Health/Health.vue'
import food from '../components/Food/Food.vue'
import uses from '../components/Uses/Uses.vue'
import beauty from '../components/Beauty/Beauty.vue'
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
