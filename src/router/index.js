import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/website/index'),
    hidden: true,
    name: 'WebsitePage',
    meta: { title: 'website' }
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'shouye', activeIcon: 'shouye-check', affix: true }
      }
    ]
  },
  {
    path: '/create-guide',
    component: Layout,
    children: [
      {
        path: 'create',
        component: () => import('@/views/create_guide'),
        name: 'ProxyCreatePage',
        meta: { title: 'createGuide', icon: 'chuangjiandaili', activeIcon: 'chuangjiandaili-check' }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    meta: { title: 'product', icon: 'dailichanpin', activeIcon: 'dailichanpin-check' },
    children: [
      {
        path: 'global_dynamic_house',
        component: () => import('@/views/product/global_dynamic_house'),
        name: 'ProductGlobalDynamicHousePage',
        meta: { title: 'product-globalDynamicHouse' }
      },
      {
        path: 'global_static_house',
        component: () => import('@/views/product/global_static_house'),
        name: 'ProductGlobalStaticHousePage',
        meta: { title: 'product-globalStaticHouse' }
      },
      {
        path: 'global_computer_room',
        component: () => import('@/views/product/global_computer_room'),
        name: 'ProductGlobalComputerRoomPage',
        meta: { title: 'product-globalComputerRoom' }
      },
      {
        path: 'buy',
        component: () => import('@/views/product/buy'),
        name: 'ProductBuyPage',
        hidden: true,
        meta: {
          title: 'product-buy',
          activeMenu: '/product/global_dynamic_house'
        }
      }
    ]
  },
  {
    path: '/bill',
    component: Layout,
    redirect: '/bill/consume',
    meta: { title: 'bill', icon: 'zhangdan', activeIcon: 'zhangdan-check' },
    children: [
      {
        path: 'rech',
        component: () => import('@/views/bill/rech'),
        name: 'BillRechPage',
        meta: { title: 'bill-rech', affix: true }
      },
      {
        path: 'rech-redirect',
        component: () => import('@/views/bill/rech/redirect'),
        name: 'RechRedirectPage',
        hidden: true
      },
      {
        path: 'relist',
        component: () => import('@/views/bill/relist'),
        name: 'BillRelistPage',
        meta: { title: 'bill-relist', affix: true }
      },
      {
        path: 'consume',
        component: () => import('@/views/bill/consume'),
        name: 'BillConsumePage',
        meta: { title: 'bill-consume', affix: true }
      },
      {
        path: 'invoice',
        component: () => import('@/views/bill/invoice'),
        name: 'BillInvoicePage',
        meta: { title: 'bill-invoice', affix: true }
      }
    ]
  },
  {
    path: '/certification',
    component: Layout,
    meta: { title: 'certification', icon: 'shimingrenzheng', activeIcon: 'shimingrenzheng-check', affix: true },
    children: [
      {
        path: 'personal',
        component: () => import('@/views/certification/personal'),
        name: 'CertificationPersonalPage',
        meta: { title: 'certification-personal', affix: true }
      },
      {
        path: 'enterprise',
        component: () => import('@/views/certification/enterprise'),
        name: 'CertificationEnterprisePage',
        meta: { title: 'certification-enterprise', affix: true }
      },
      {
        path: 'enterprise/auth-redirect',
        component: () => import('@/views/certification/enterprise/auth-redirect'),
        hidden: true
      }
    ]
  },
  {
    path: '/country_list',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/country_list/index'),
        name: 'CountryListPage',
        meta: { title: 'countryList', icon: 'guojiadaima', activeIcon: 'guojiadaima-check', affix: true }
      }
    ]
  },
  {
    path: '/extension',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/extension/index'),
        name: 'ExtensionPage',
        meta: { title: 'extension', icon: 'jiangli', activeIcon: 'jiangli-check', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'externalLink', icon: 'link' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
