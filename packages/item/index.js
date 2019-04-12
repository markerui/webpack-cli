import Item from './src/index.vue';

Item.install = function (Vue) {
    Vue.component(Item.name, Item);
};

export default Item;