import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from './App.vue';
import Login from './Login.vue';
import My from './My.vue';
import List from './List.vue';

// new Vue({
//   el: '#app',
//   render: h => h(List)
// })

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/list' },
  { path: '/login', component: Login },
  { path: '/my', component: My },
  { path: '/list', component: List }
];

const router = new VueRouter({
  routes
});


new Vue({
  router
}).$mount('#app');
