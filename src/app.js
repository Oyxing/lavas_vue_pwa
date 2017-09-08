/**
 * @file entry
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

import Vue from 'vue';
import Vuetify from 'vuetify';
import Axios from 'axios'
import VueRes  from 'vue-resource'

import {createRouter} from './router';
import store from './store';
import App from './App.vue';
import Icon from 'vue-awesome/components/Icon.vue';
import '../node_modules/konva/konva.min.js'
Vue.use(VueRes,Axios)

Vue.use(Vuetify);
Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
    let router = createRouter();
    let app = new Vue({
        router,
        store,
        ...App
    });
    return {app, router, store};
}
