import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/index";
//global css
import "./styles/app.css";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBcAswDs2-X-7kk887AuOlL5IP-EgR1s0M",
  authDomain: "movie-spa-83c72.firebaseapp.com",
  databaseURL: "https://movie-spa-83c72.firebaseio.com",
  projectId: "movie-spa-83c72",
  storageBucket: "movie-spa-83c72.appspot.com",
  messagingSenderId: "601080606181",
  appId: "1:601080606181:web:58d6eaf73ba86e6e2a930c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
