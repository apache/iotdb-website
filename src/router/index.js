import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Download from '@/views/Download'
import Documents from '@/views/Documents'
import Tools from '@/views/Tools'
import Community from '@/views/Community'
import Development from '@/views/Development'
import Example from '@/views/Example'
import NotFound from "../views/NotFound"
import SingleTool from "../views/SingleTool"
import LatestDoc from "../views/LatestDoc"
import Materials from "../views/Materials"
import SingleMaterials from "../views/SingleMaterial"

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
      path: '/Documents/:doc',
      name: 'Documents',
      component: LatestDoc
    },
    {
      path: '/Documents/:version/:section?',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/Materials',
      name: 'Materials',
      component: Materials
    },
    {
      path: '/Materials/:doc',
      name: 'Materials',
      component: SingleMaterials
    },
    {
      path: '/Tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/Tools/:content',
      name: 'SingleTool',
      component: SingleTool
    },
    {
      path: '/Community/:content',
      name: 'Community',
      component: Community
    },
    {
      path: '/Development',
      name: 'Development',
      component: Development
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
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
  ],
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      // get Nav bar height
      let yOffset = document.getElementById("bs-example-navbar-collapse-1").clientHeight;
      console.log(yOffset);
      return {
        selector: to.hash,
        offset: {x: 0, y: yOffset}
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
})
