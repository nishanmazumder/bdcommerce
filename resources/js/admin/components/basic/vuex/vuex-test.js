import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
//export default new Vuex.Store({
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
        dataMuted(state, playload) {
            return state.change = playload
        }
    },
    modules: {}

})

