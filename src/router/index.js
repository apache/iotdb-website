import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Download from '@/views/Download'
import Documents from '@/views/Documents'
import Tools from '@/views/Tools'
import Community from '@/views/Community'
import Development from '@/views/Development'
import Example from '@/views/Example'
import Comming from '@/views/Comming'
import NotFound from "../views/NotFound";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Download',
      name: 'Download',
      component: Download
    },
    {
      path: '/Documents/:version/:section?',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/Tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/Community/:content',
      name: 'Community',
      component: Community
    },
    {
      path: '/Development/:content',
      name: 'Development',
      component: Development

    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
    },
    {
      path: '/Comming',
      name: "Comming",
      component: Comming
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound
    },
    {
      path: '/Comming',
      name: "Comming",
      component: Comming
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
})
