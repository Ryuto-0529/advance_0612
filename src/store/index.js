import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState],
  state: {
    id: '',
  },
  mutations: {
    id(state, payload) {
      state.id = payload;
    },
    logout(state) {
      state.id = '';
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const responseLogin = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(responseLogin);
      commit('id', responseLogin.data.id);
      
      router.replace('/home');
    },
    logout({ commit }) {
      axios
        .post('http://localhost:8000/api/v1/users/logout')
        .then((response) => {
          console.log(response);
          commit('logout');
          router.replace('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
