import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('token')
};

const getters = {
    isLoggedIn : state => !!state.token
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    login: () => {
        api.login();
    },

    finalizeLogin: ({commit}, hash) => {
        const queryResp = qs.parse(hash.replace('#', ''));
        commit('setToken', queryResp.access_token);
        window.localStorage.setItem('token', queryResp.access_token);
        router.push('/');
    },

    logout: ({commit}) => {
        commit('setToken', null);
        window.localStorage.removeItem('token');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};


