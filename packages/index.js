import Item from './item/index'
import Flex from './flex/index'
import mkNavBar from './navbar/index'

const components = [
    Item,
    Flex,
    mkNavBar
]

// 导出 install 函数
// Vue.use() 会调用这个函数
const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
    // MetaInfo.install(Vue)
    // Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Item,
    Flex,
    mkNavBar
}