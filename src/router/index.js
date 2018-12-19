import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Home from '@/views/Home'
import Download from '@/views/Download'
import Documents from '@/views/Documents'
import Tools from '@/views/Tools'
import Community from '@/views/Community'
import Development from '@/views/Development'
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
      component: Comming
    },
    {
      path: '/Documents',
      name: 'Documents',
      component: Comming
    },
    {
      path: '/Tools',
      name: 'Tools',
      component: Comming
    },
    {
      path: '/Community',
      name: 'Comming',
      component: Comming
    },
    {
      path: '/Development',
      name: 'Development',
      component: Comming
    },
    {
      path: '/Comming',
      name: "Comming",
      component: Comming
    }
  ]
})
