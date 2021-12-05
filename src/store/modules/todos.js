import axios from "axios";

const state = {
    todos: [],
    isComplete:false
};

const getters = {
    allTodos: state => {
        return state.todos
    },
    getCurrentNumberOfTodos: state => {
        return state.todos.length
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
    },
    onDblClick: async (context,{completed,id,title,userId}) => {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            title:title,
            userId:userId,
            completed:!completed,
            id:id
        })
        context.commit('TOGGLE_COMPLETED_STATUS',response.data)
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
    },
    TOGGLE_COMPLETED_STATUS:(state,payload) => {
        const index = state.todos.findIndex(todo => todo.id === payload.id)
        console.log(index);
        if (index !== -1) {
            state.todos.splice(index, 1, payload);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}