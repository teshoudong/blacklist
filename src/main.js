import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Login from './Login.vue';
import My from './My.vue';
import List from './List.vue';
import Search from './Search.vue';
import Add from './Add.vue';
import Detail from './Detail.vue';
import Signup from './Signup.vue';
import Menu from './Menu.vue';
import Address from './Address.vue';
import AMap from 'vue-amap';


Vue.use(AMap);
Vue.use(VueRouter);
Vue.use(Vuex);

AMap.initAMapApiLoader({
  // 高德的key
  key: '918944119fe4c1014ccccdf509de81da',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

const store = new Vuex.Store({
  state: {
    menuStatus: false,
    address: null
  },
  mutations: {
    showMenu(state) {
      state.menuStatus = true;
    },
    hideMenu(state) {
      state.menuStatus = false;
    },
    toggleMenu(state) {
      state.menuStatus = !state.menuStatus;
    },
    updateAddress(state, address) {
      state.address = address;
    }
  }
});

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/list' },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/list', component: List },
    { path: '/add', component: Add },
    { path: '/detail/:id', component: Detail },
    { path: '/signup', component: Signup },
    { path: '/address', component: Address },
    { path: '/search', component: Search }
  ]
});


new Vue({
  router,
  store
}).$mount('#app');

new Vue({
  el: '#menu',
  store,
  render: h => h(Menu)
})
