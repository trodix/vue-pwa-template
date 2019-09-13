
const state = {
    drawer: false
}

const getters = {

}

const actions = {
    // drawer({ commit }, val) {
    //     commit('drawer');
    // }
}

const mutations = {
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

