import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
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
        }
    ]
})