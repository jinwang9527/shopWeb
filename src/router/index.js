import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import test from './test'
import base from './base'
import home from './home'


export const constantRouterMap = [
  base,
  test,

];


export const asyncRouterMap = [
  home
];

export default new Router({
  routes: constantRouterMap
})
