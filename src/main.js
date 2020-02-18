import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import AuthHandler from './components/AuthHandler';
import store from './store';
import ImageList from './components/ImageList';
import UploadImage from './components/UploadImage';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      component: ImageList
    },
    {
      path: '/upload',
      component: UploadImage
    },
    {
      path: '/oauth2/callback',
      component: AuthHandler
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
