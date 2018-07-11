import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import meeting from '@/components/module/meeting'
import meetingRoom from '@/components/module/meetingRoom'
import setting from '@/components/module/setting'
import list from '@/components/module/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path:'/meeting',
      name:'meeting',
      component:meeting
    },
    {
      path:'/meetingRoom',
      name:'meetingRoom',
      component:meetingRoom
    },
    {
      path:'/setting',
      name:'setting',
      component:setting
    },
    {
      path:'/list',
      name:'list',
      component:list
    }
  ]
})
