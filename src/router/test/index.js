import first from '../../views/test/first'
import second from '../../views/test/second'
import Layout from '../../views/layout/Layout'

export default {
  path: '/test',
  name: '测试',
  title: '测试1',
  redirect: '/test/first',
  component:Layout,
  icon: 'null',
  children:[
    {
      path: 'first',
      name: '第一个页面',
      title: '第一个页面1',
      component: first,
    },
    {
      path: 'second',
      name: '第二个页面',
      title: '第二个页面1',
      component: second,
    }
  ]
}
