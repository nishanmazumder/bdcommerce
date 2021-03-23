// Main
require('./bootstrap')

// Import Vue
import Vue from 'vue'

// Import Vuex
import Vuex from 'vuex'

// Import Vue Router
import router from './routes'

// Import axios
import Common from './common'

// Import main app
import App from './App.vue'

//Uses
//window.Vue = require('vue')
Vue.use(Vuex)
Vue.mixin(Common)

//Vue.component('mainapp', require('./components/mainapp.vue').default)

const store = new Vuex.Store()

const web = new Vue({
    router,
    store,
    render: h => h(App)
    //el : '#app'
}).$mount('#web')
