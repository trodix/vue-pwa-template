
const state = {
    drawer: false,
    isLoading: false
}

const getters = {

}

const actions = {

}

const mutations = {
    loadingStatus(state, value) {
        state.isLoading = value;
    },
    drawer(state) {
        state.drawer = !state.drawer;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

