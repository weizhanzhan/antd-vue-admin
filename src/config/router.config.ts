/**
 * @desc 这里只要数模拟菜单通过接口获取
 * @param routes
 * @param role
*/
export default [
  {
    name: 'base',
    menus: [
      {
        path: '/components',
        component: 'Layout',
        redirect: '/components/echarts',
        name: 'components',
        meta: { title: 'components' },
        alwaysShow: true,
        children: [
          {
            path: 'echarts',
            name: 'echarts',
            component: 'system/components/echarts',
            meta: { title: 'echarts' }
          }
        ]
      }
    ]
  },
  {
    name: 'module1',
    menus: [
      {
        path: '/dashboard',
        component: 'Layout',
        redirect: '/dashboard/analysis',
        name: 'dashboard',
        meta: { title: 'dashboard' },
        alwaysShow: true,
        children: [
          {
            path: 'workplace',
            name: 'workplace',
            component: 'business/dashboard/workplace',
            meta: { title: 'workplace' }
          },
          {
            path: 'analysis',
            name: 'analysis',
            component: 'business/dashboard/analysis',
            meta: { title: 'analysis' }
          }
        ]
      },
      {
        path: '/customer',
        component: 'Layout',
        redirect: '/customer/list',
        name: 'customer',
        meta: { title: 'customer' },
        alwaysShow: true,
        children: [
          {
            path: 'datasheets',
            name: 'customerDatasheets',
            component: 'business/customer',
            meta: { title: 'datasheets' }
          }
        ]
      }
    ]
  }
]
