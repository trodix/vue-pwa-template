import axios from 'axios';
const apiUrl = "https://127.0.0.1:8000/api";

const state = {
    isLoading: false

};

const getters = {

};

const actions = {
    async login({ commit, state }, payload) {
        console.log("authentication sent!");
        commit('loadingStatus', true)
        axios.post(`${apiUrl}/login`, {
            _email: payload.email, _password: payload.password
        })
        .then(response => {
            if(response.status == 200) {
                const user = response.data;
                return commit({user});
            }
        })
        .catch(err => {
            console.log(err.message);
        })
        .finally(() => {
            state.isLoading = false;
        })
    }
};

const mutations = {
    loadingStatus(state, value) {
        state.isLoading = value;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};