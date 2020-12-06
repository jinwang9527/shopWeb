import Loginlayout from '../../views/layout/Loginlayout'
import openShop from '../../views/onlineShop/openShop'

export default {
  path: '/onlineShop',
  redirect: '/onlineShop/openShop',
  component:Loginlayout,
  meta: { role: ['Buyer'] },
  children:[
    {
      path: 'openShop',
      title: '开店铺',
      meta: { role: ['Buyer'] },
      component: openShop,
    },
  ]
}
