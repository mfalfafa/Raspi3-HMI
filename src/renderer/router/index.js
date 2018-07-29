import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/Component1').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
