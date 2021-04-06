import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter : 1000,

        //List Show
        listObj: {
            items : [],
            dataUrl: ''
        },

        //Delete Modal
        deleteObj : {
            data : null,
            dataUrl : '',
            deleteAlert: false
        }
    },
    getters: {
        getCounter(state){
            return state.counter
        },

        getList(){
            return state.setList
        },

        deleteData(state){
            return state.deleteObj
        }
    },
    mutations : {
        changeDataMutation(state, data){
            state.counter += data
        },

        setDeleteModal(state, data){
            state.deleteObj.deleteAlert = false
        },

        setDeleteModalObj(state, data){
            state.deleteObj = data
        },

        setListItem(state, data){
            //state.setList = data
            console.log(data)
        }
    },
    actions : {
        changeDataAction({commit}, data){
            commit('changeDataMutation', data)
        }
    }
})
