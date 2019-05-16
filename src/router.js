 import Vue from 'vue'
 import Router from 'vue-router'
 import appHome from '@/components/appHome'
 import appLogin from '@/components/appLogin'
 import appContact from '@/components/appContact'


 Vue.use(Router)

 export default new Router({
     routes: [
         {
             path: '/',
             name: 'appHome',
             component: appHome
         },
         {
            path: '/login',
            name: 'appLogin',
            component: appLogin
        },
        {
            path: '/contact',
            name: 'appContact',
            component: appContact
        },
     ]
 })