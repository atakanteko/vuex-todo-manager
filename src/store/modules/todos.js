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
    },
    postTodo: async (context,payload) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
                         {
                             'title':payload,
                             'completed':false
                         })
        
        context.commit('ADD_NEW_TODO',response.data)
    },
    deleteTodo: async (context, payload) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${payload}`)
        context.commit('DELETE_TODO',payload)
    },
    filterTodos: async({commit},payload) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${payload}`)
        commit('FILTER_TODOS',response.data)
    }
};

const mutations = {
    UPDATE_TODOS:(state,payload) => {
        state.todos = payload
    },
    ADD_NEW_TODO:(state,payload) => {
        state.todos.unshift(payload)
    },
    DELETE_TODO:(state,payload) => {
        state.todos = state.todos.filter(todo => todo.id !== payload)
    },
    FILTER_TODOS:(state,payload) => {
        state.todos = payload
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}