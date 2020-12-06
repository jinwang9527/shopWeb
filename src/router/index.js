import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import test from './test'
import base from './base'
import home from './home'
import onlineShop from './onlineShop'


export const constantRouterMap = [
  base,
  test,
];


export const asyncRouterMap = [
  home,
  onlineShop
];

export default new Router({
  routes: constantRouterMap
})
