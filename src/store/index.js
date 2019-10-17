import Vue from "vue";
import Vuex from "vuex";
import Pagination from "./pagination/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Pagination
  }
});
