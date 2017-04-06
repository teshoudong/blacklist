import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './Login.vue';
import My from './My.vue';
import List from './List.vue';
import Add from './Add.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/list' },
  { path: '/login', component: Login },
  { path: '/my', component: My },
  { path: '/list', component: List },
  { path: '/add', component: Add }
];

const router = new VueRouter({
  routes
});


new Vue({
  router
}).$mount('#app');
