import Vue from 'vue'
import Router from 'vue-router'
import GameRules from '@/components/GameRules'
import StartGame from '@/components/StartGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: GameRules
    },
    {
      path: '/game',
      component: StartGame
    }
  ],
  mode: "history"
})
