import loginService from '../services/auth/loginService';
import router from '../router'

const state = {
    user: {},
    token: localStorage.getItem('token') || '',
    status: ''
};

const getters = {

};

const actions = {
    async login({ commit }, payload) {
        commit('app/loadingStatus', true, { root: true })
        loginService.login(
            {
                _email: payload.email,
                _password: payload.password, 
            })
        .then(response => {
            if(response.status == 200) {
                const user = response.data.user;
                const token = response.data.token;
                localStorage.setItem('token', token)
                commit('auth_success', {user, token});
                router.push('/')
            }
        })
        .catch(err => {
            payload.vm.$toast.error(err.message);
            localStorage.removeItem('token')
            commit('auth_error')
        })
        .finally(() => {
            commit('app/loadingStatus', false, { root: true })
        })
    }
};

const mutations = {
    auth_success(state, payload) {
        state.user = payload.user,
        state.token = payload.token
    },
    auth_error(state) {
        state.user = {};
        state.token = '';
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};