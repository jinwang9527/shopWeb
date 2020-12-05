import Layout from '../../views/layout/Layout'
import homePage from '../../views/home/HomePage'


export default {
  path: '/home',
  redirect: '/home/homePage',
  component:Layout,
  meta: { role: ['Buyer'] },
  children:[
    {
      path: 'homePage',
      title: '主页',
      meta: { role: ['Buyer'] },
      component: homePage,
      hidden: true
    },
  ]
}
