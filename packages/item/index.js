import Item from './src/index.vue';

Item.install = function (Vue) {
    Vue.component(Item.name, Item);
};

export default Item;

// http: //www.ruanyifeng.com/blog/2015/07/flex-grammar.html 组件参考教程用法