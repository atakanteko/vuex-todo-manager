import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'

//Load Vuex
Vue.use(Vuex)

//Create Store
export const store = new Vuex.store({
    modules:{
        todos
    },
})