import {login, getUserInfo,getRole} from "../../api/login";
import {setToken,getToken} from '../../utils/TokenUtil'
import { asyncRouterMap } from '../../router'


function filterAsyncRouter(asyncRouterMap, roles) {
  let router = asyncRouterMap.filter(route => {
    if (verificationRole(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  });
  return router
}
function verificationRole(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}


const state = {
  token: getToken(),
  userInfo: null,
  routers:[],
  role:[]
};

const mutations = {

  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },

  SET_ROUTERS:(state,routers) =>{
    state.routers = routers
  },

  SET_ROLE:(state,role) =>{
    state.role = role
  }
};


const getters = {
  token: state => state.token,
  userInfo:state => state.userInfo,
  routers:state => state.routers
};


const actions = {
  Login({commit}, info) {
    return new Promise((resolve, reject) => {
      login({account: info.account, password: md5(info.password),loginSign:info.loginSign}).then(response => {
        if (response.code ===  0){
          commit('SET_TOKEN', response.data);
          setToken(response.data);
          resolve()
        }else{
          alert(response.message)
        }
      }).catch(error => {
        console.log('error =',error);
        reject(error)
      })
    })
  },

  getUserInfo({commit}) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        commit('SET_USER_INFO', response.data)
        resolve(response.data)
      }).catch(error =>{
        reject(error)
      })
    })
  },

  getRole({commit}){
    return new Promise((resolve, reject) => {
      getRole().then(response => {
        commit('SET_ROLE', response.data)
        resolve(response.data)
      }).catch(error =>{
        reject(error)
      })
    })
  },

  getRoutes({commit},role){
    return new Promise((resolve, reject) => {
      console.log('role = ',role)
     let router = filterAsyncRouter(asyncRouterMap, role)
      commit('SET_ROUTERS',router)
      resolve(router)
    }).catch(error =>{
      reject(error)
    })
  }
};


import {md5} from "../../utils/common";

export default {
  state,
  getters,
  actions,
  mutations
}


