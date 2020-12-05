import Loginlayout from '../../views/layout/Loginlayout'
import login from '../../views/login/Login'
import register from '../../views/login/Register'


export default {
  path: '/',
  redirect: '/login',
  component:Loginlayout,
  children:[
    {
      path: 'login',
      title: '登录',
      component: login,
      hidden: true
    },
    {
      path: 'register',
      title: '注册',
      component: register,
      hidden: true
    },
  ]
}
