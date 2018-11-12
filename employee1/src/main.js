import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import CreateItem from './components/CreateItem.vue'
import DisplayItem from './components/DisplayItem.vue'
import EditItem from './components/EditItem.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.use(VueAxios, axios)

const routes = [
  {
    name: 'CreateItem',
    path: '/',
    component: CreateItem
  },
  {
    name: 'DisplayItem',
    path: '/display',
    component: DisplayItem
  },
  {
    name: 'EditItem',
    path: '/edit',
    component: EditItem
  }
]

const router = new VueRouter({ mode: 'history', routes: routes })
new Vue(Vue.util.extend({ router }, App)).$mount('#app')
