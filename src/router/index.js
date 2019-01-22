import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Download from '@/views/Download'
import Documents from '@/views/Documents'
import Tools from '@/views/Tools'
import MailingList from '@/views/Community/MailingList'
import IssueTracker from '@/views/Community/IssueTracker'
import ContributingToIoTDB from '@/views/Community/ContributingToIoTDB'
import PoweredBy from '@/views/Community/PoweredBy'
import ProjectCommitters from '@/views/Community/ProjectCommitters'
import ProjectHistory from '@/views/Community/ProjectHistory'
import UsefulDeveloperTools from '@/views/Development/UsefulDeveloperTools'
import VersioningPolicy from '@/views/Development/VersioningPolicy'
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
      path: '/Community/MailingList',
      name: 'MailingList',
      component: MailingList
    },
    {
      path: '/Community/IssueTracker',
      name: 'IssueTracker',
      component: IssueTracker
    },
    {
      path: '/Community/ContributingToIoTDB',
      name: 'ContributingToIoTDB',
      component: ContributingToIoTDB
    },
    {
      path: '/Community/PoweredBy',
      name: 'PoweredBy',
      component: PoweredBy
    },
    {
      path: '/Community/ProjectCommitters',
      name: 'ProjectCommitters',
      component: ProjectCommitters
    },
    {
      path: '/Community/ProjectHistory',
      name: 'ProjectHistory',
      component: ProjectHistory
    },
    {
      path: '/Development/UsefulDeveloperTools',
      name: 'UsefulDeveloperTools',
      component: UsefulDeveloperTools
    },
    {
      path: '/Development/VersioningPolicy',
      name: 'VersioningPolicy',
      component: VersioningPolicy
    },
    {
      path: '/Comming',
      name: "Comming",
      component: Comming
    }
  ]
})
