import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/About',
            name: 'About',
            component: About
        }
    ]
})