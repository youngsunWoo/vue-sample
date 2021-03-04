import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[

    //일반 화면 mapping
    { path: '/404',component: () => import('@/views/error/404'),hidden: true },
    { path: '/test', component: () => import('@/views/testpage')},


    //레이아웃 타는 화면들 mapping
    {
      path: '/', component: Layout, redirect: '/mainpage',
      children: [{ path: 'mainpage', name: 'Mainpage', component: () => import('@/views/main/index')}]
    },
    {
      path: '/form', component: Layout,
      children:  [{ path: 'index', name: 'Form', component: () => import('@/views/main/index')}]
    },


    // 404 page must be placed at the end
    { path: '*', redirect: '/404', hidden: true }
   ]
});

export default router