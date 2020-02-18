import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

const actions = {
    async fetchImages ({ rootState, commit }) {  //rootState is used to communicate across the modules to access data.
        const { token } = rootState.auth;        
        const res = await api.fetchImages(token);
        commit('setImages', res.data.data);
        window.console.log(res);
    },
    async uploadImages( { rootState }, images ) {
        const { token } = rootState.auth;        
        await api.uploadImages(images, token);
        router.push('/');
        
        // window.console.log(images);

    } 


};

export default {
    state,
    getters,
    mutations,
    actions
};