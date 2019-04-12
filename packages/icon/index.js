import Iconfont from './src/index.vue';

Iconfont.install = function (Vue) {
    Vue.component(Iconfont.name, Item);
};

export default Iconfont;