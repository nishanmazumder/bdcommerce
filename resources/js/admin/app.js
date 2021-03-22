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

// Import Bootstrap
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//Uses
//window.Vue = require('vue')
Vue.use(Vuex)
Vue.mixin(Common)
Vue.use(ViewUI);

//Vue.component('mainapp', require('./components/mainapp.vue').default)

const store = new Vuex.Store({
    state: {
        test: 'this is test',
        user: {
            name: 'Nishan',
            mail: 'nis@nis.com'
        },
        change: 'Change Me'
    },
    getters: {
        user(state) {
            return state.user
        },

        change(state) {
            return state.change
        }

    },
    actions: {
        changeData(context, playload) {
            context.commit('dataMuted', playload)
        }
    },
    mutations: {
        dataMuted(state, playload){
            return state.change = playload
        }
    },
    modules: {}

})

const app = new Vue({
    router,
    store,
    render: h => h(App)
    //el : '#app'
}).$mount('#app')
