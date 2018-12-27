'use strict';

import 'babel-polyfill';

import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

import '../css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import '../css/style.css';

Vue.use(ElementUI, { locale });

new Vue({
  el: '#app',
  data: {},
  methods: {
    login: async function() {
      console.log('login');
    },
  },
});
