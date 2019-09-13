import axios from 'axios';
const apiUrl = "https://127.0.0.1:8000/api";


const state = {
    isLoading: false

};

const getters = {

};

const actions = {
    async login({ commit, state }, payload) {
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
            payload.vm.$toast.error(err.message);
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