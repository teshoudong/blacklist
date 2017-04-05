import Vue from 'vue';
// import App from './App.vue';
import Login from './Login.vue';
import My from './My.vue';
import List from './List.vue';

new Vue({
  el: '#app',
  render: h => h(List)
})
