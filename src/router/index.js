import Vue from 'vue'
import Router from 'vue-router'
import MOJHome from '@/components/MOJHome'
import MOJMenu from '@/components/MOJMenu'
import Login from '@/components/Auth/Login'
import Test from '@/components/Test'

import Problem from '@/components/Problem/ProblemList'
import ProblemDetail from '@/components/Problem/ProblemDetail'

import Contest from '@/components/Contest/ContestList'
import ContestDetail from '@/components/Contest/ContestDetail'
import ContestInformation from '@/components/Contest/ContestInformation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MOJHome',
      component: MOJHome
    },
    {
      path: '/menu',
      name: 'Menu',
      component: MOJMenu
    },
    {
      path: '/problem',
      name: 'Problem',
      component: Problem
    },
    {
      path: '/problem/id/:id',
      name: 'ProblemDetail',
      component: ProblemDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Contest',
      name: 'Contest',
      component: Contest
    },
    {
      path: '/ContestDetail/id/:id',
      name: 'ContestDetail',
      component: ContestDetail,
      redirect: '/ContestDetail/id/:id/ContestInformation',
      children:[
        {
          path: 'ContestInformation',
          name: 'ContestInformation',
          component: ContestInformation
        }
      ]
    }
  ]
})
