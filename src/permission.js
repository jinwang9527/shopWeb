import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {getToken} from './utils/TokenUtil'
import {errorMessage} from "./utils/Message";

const whiteList = ['/', '/login', '/register']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getToken()) {
    if (to.path === '/login' || to.path === '/') {
      NProgress.done();
      next()
    } else {
      // 没有用户信息
      if (!store.state.user.userInfo && store.state.user.userInfo === null) {
        store.dispatch('getUserInfo').then(res => { // 拉取用户信息
          store.dispatch('getRole').then(role => { //获取角色
            store.dispatch('getRoutes', role).then(routes => {
              console.log('routes = ', routes);
              router.addRoutes(routes);
              next({ ...to, replace: true });
              NProgress.done()
            }).catch(() => {
              store.dispatch('FedLogOut').then(() => {
                errorMessage('验证失败,请重新登录');
                next({path: '/login'});
                NProgress.done()
              })
            });
          }).catch(() => {
            store.dispatch('FedLogOut').then(() => {
              errorMessage('验证失败,请重新登录')
              next({path: '/login'})
              NProgress.done()
            })
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            errorMessage('验证失败,请重新登录')
            next({path: '/login'})
            NProgress.done()
          })
        })
      } else {
        next();
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login');
      NProgress.done()
    }
  }
});
router.afterEach(() => {
  NProgress.done() // 结束Progress
})
