import loginService from '../services/auth/loginService';
import router from '../router'
import axios from '../axios.config'

const state = {
    isLoggedIn: false, // depreciated, use getter instead
    user: {},
    roles: [],
    token: localStorage.getItem('token'),
};

const getters = {
    /**
     * check if the user is logged in.
     */
    // isLoggedIn: state => !!state.token, // for some reason, store.getters.isLoggedIn returns "state => !!state.token" and not the boolean value
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
                const roles = response.data.roles;
                localStorage.setItem('token', token);
                commit('auth_success', {user, token, roles});
                router.push('/');
            }
        })
        .catch(err => {
            payload.vm.$toast.error(err.message);
            localStorage.removeItem('token');
            commit('auth_error');
        })
        .finally(() => {
            commit('app/loadingStatus', false, { root: true });
        })
    },
    logout({commit}){
        return new Promise((resolve, reject) => {
          commit('logout');
          localStorage.removeItem('token');
          delete axios.defaults.headers.common['Authorization'];
          resolve();
        })
    }
};

const mutations = {
    auth_success(state, payload) {
        state.user = payload.user;
        state.token = payload.token;
        state.roles = payload.roles;
        state.isLoggedIn = true; // depreciated, use getter instead
    },
    auth_error(state) {
        state.user = {};
        state.token = '';
        state.isLoggedIn = false; // depreciated, use getter instead
    },
    logout(state){
        state.token = '';
        state.isLoggedIn = false; // depreciated, use getter instead
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};