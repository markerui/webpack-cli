import Iconfont from './src/index.vue';

Iconfont.install = function (Vue) {
    Vue.component(Iconfont.name, Item);
};

export default Iconfont;

// http: //www.ruanyifeng.com/blog/2015/07/flex-grammar.html 组件参考教程用法