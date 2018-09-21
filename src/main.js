import Vue from 'vue'
import App from './App.vue'
//global registration
//import Home from './Home.vue'
//Vue.component('app-server-status', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
