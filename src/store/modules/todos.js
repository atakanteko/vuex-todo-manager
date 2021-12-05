import axios from "axios";

const state = {
    todos: []
};

const getters = {
    allTodos: state => {
        return state.todos
    }
};

const actions = {
    fetchTodos: async (context,payload) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        context.commit('UPDATE_TODOS',response.data)
    }
};

const mutations = {
    UPDATE_TODOS:(state,payload) => {
        state.todos = payload
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}