import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Download from '@/views/Download'
import Documents from '@/views/Documents'
import Community from '@/views/Community'
import Development from '@/views/Development'
import Tools from '@/views/Tools'
import Comming from '@/views/Comming'


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
      path: '/Documents',
      name: 'Documents',
      component: Comming
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
      path: '/Comming',
      name: "Comming",
      component: Comming
    }
  ]
})
