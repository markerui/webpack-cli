import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(Vue)
new Vue({
    el: "#app",
    components: {
        App
    },
    template: '<App/>'
})