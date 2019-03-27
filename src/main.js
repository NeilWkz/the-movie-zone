import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

Vue.component("VueSlider", VueSlider);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    if(!process.env.VUE_APP_API_KEY) {
      alert(' Error! Please add your Movie DB api key into an .env.local file');
    };
  },
}).$mount("#app");
