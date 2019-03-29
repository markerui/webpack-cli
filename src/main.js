import Vue from 'vue'
import App from './App'
import router from './router'
import mkui from '../packages/index'

Vue.config.productionTip = false
Vue.use(mkui)

new Vue({
    el: "#app",
    router,
    components: {
        App
    },
    template: '<App/>'
})