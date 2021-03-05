import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [

  // pages not using layout
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },{
    path: '/test',
    component: () => import('@/views/testpage'),
    hidden: true
  },

   // pages using layout
  {
    path: '/',
    component: Layout,
    redirect: '/mainpage',
    children: [{
      path: 'mainpage',
      name: 'Mainpage',
      component: () => import('@/views/main/index')
    }]
  },

  {
    path: '/samples',
    component: Layout,
    redirect: '/samples/index',
    children: [
      {path: 'index',name: 'sample', component: () => import('@/views/samples/Index')}, 
      {path: 'apiCall', name: 'sample-api', component: () => import('@/views/samples/SampleApiCall')},
      {path: 'store', name: 'sample-store', component: () => import('@/views/samples/SampleStore')},
      {path: 'form', name: 'form', component: () => import('@/views/samples/SampleForm')},
      {path: 'form2', name: 'form2', component: () => import('@/views/samples/SampleForm2')},
      { path: 'router', name : 'router', component: () => import('@/views/samples/SampleRouter'), 
        props: (route) => ({ query: route.query.user_id})
      },
    ]
  },

  // if enter the incorrect url path, redirect to 404 error page
  // 404 page must be placed at the end
  { path: '*',
   redirect: '/404', 
   hidden: true 
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

export default router
