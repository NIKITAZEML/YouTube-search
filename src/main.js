import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios)


import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";


firebase.initializeApp({
  apiKey: "AIzaSyCtPgEIzx4c_gUOJqrQI6-7XhdHxBanbe8",
  authDomain: "search-77b8e.firebaseapp.com",
  projectId: "search-77b8e",
  storageBucket: "search-77b8e.appspot.com",
  messagingSenderId: "738258628095",
  appId: "1:738258628095:web:a013af73a65d283ba70bca",
  measurementId: "G-97KRHGS89H"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      router,
      store,
      axios,
      VueAxios,
      render: h => h(App)
    }).$mount('#app')
  }
})


