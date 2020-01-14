import Vue from "vue";
import Vuetify from "vuetify";
import Typer from "vue-typer";
import App from "./App.vue";
import router from './routes'
import "vuetify/dist/vuetify.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Typer);

new Vue({
  router,
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          perfect: "#fc4850",
          primary: "#3f51b5",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c"
        }
      }
    }
  }),
  render: h => h(App)
}).$mount("#app");
