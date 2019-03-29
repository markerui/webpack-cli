import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import flex from '@/pages/Flex'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/flex',
            name: 'flex',
            component: flex
        }
    ]
})