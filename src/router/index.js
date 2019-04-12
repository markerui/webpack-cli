import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/init',
            name: 'init',
            component: () => import('@/doc/init.md')
        }, {
            path: '/start',
            name: 'start',
            component: () => import('@/doc/start.md')
        },
        {
            path: '/flex',
            name: 'flex',
            component: () => import('@/doc/flex.md')
        },
        {
            path: '/form',
            name: 'form',
            component: () => import('@/doc/form.md')
        }, {
            path: '/navbar',
            name: 'navbar',
            component: () => import('@/doc/navbar.md')
        }, {
            path: '/iconfont',
            name: 'iconfont',
            component: () => import('@/doc/iconfont.md')
        }, {
            path: '/tabbar',
            name: 'tabbar',
            component: () => import('@/doc/tabbar.md')
        }
    ]
})