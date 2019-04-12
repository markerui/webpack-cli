import Tabbar from './src/index.vue';
import TabbarItem from './src/item.vue';

Tabbar.install = function (Vue) {
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabbarItem.name, TabbarItem);
};
// TabbarItem.install = function (Vue) {

// };
export default Tabbar;
// export default {
//     Tabbar,
//     TabbarItem
// }