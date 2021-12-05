import axios from "axios";

const state = {
    todos: [
        { id: 1, title: 'Todo One'},
        { id: 2, title: 'Todo Two'},
    ]
};

const getters = {
    allTodos: state => {
        return state.todos
    }
};

const actions = {
    
};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
}