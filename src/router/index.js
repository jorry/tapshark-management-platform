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
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: '卡片制作',
    meta: { title: '卡片制作', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'createcardDetail/',
        component: () => import('@/views/createcard/detail'),
        name: 'detail',
        meta: { title: '卡片详情', noCache: true, activeMenu: '/createcard/index' },
        hidden: true
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/createcard/index'),
        meta: { title: '卡片制作', icon: 'table' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: '/example/table',
    meta: { title: '支付码', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'reachageCodeList',
        name: 'reachageCodeList',
        component: () => import('@/views/changecode/changelist'),
        meta: { title: '支付码列表', icon: 'table' }
      },
      {
        path: 'reachageCodeCreate',
        name: 'reachageCodeCreate',
        component: () => import('@/views/changecode/changecodecreate'),
        meta: { title: '生成支付码', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: '卡片管理',
    meta: {
      title: '卡片管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/cardmanager/index'), // Parent router-view
        name: '卡片管理',
        meta: { title: '卡片管理' },
      
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
