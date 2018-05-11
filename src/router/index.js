import Vue from 'vue'
import Router from 'vue-router'
import school from '@/components/school'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/school/64'
    },
    {
      path: '/school/:id',
      name: 'school',
      component: school
    }
  ]
})
