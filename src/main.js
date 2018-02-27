import Vue from 'vue'
import App from './App.vue'
import Message from 'vue2-plugin-message'

Vue.use(Message)

new Vue({
  el: '#app',
  render: h => h(App)
})
