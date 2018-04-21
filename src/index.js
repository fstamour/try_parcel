import Vue from 'vue/dist/vue.js';
import App from './app';

Vue.config.productionTip = false;

const app = window.addEventListener('load', () => {
    new Vue({
        el: '#root',
        components: { App },
        template: '<App/>'
    });
})

export default app;
