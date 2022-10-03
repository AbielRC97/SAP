import { createStore } from "vuex";
export default createStore({
  state: {
    numeros: [] as any[],
  },
  mutations: {
    setNumeros(state, payload) {
      console.log(payload);
      state.numeros.push(payload);
    },
  },
  actions: {
    addNumber({ commit }, payload) {
      commit("setNumeros", payload);
    },
  },
  getters: {
    obtenerNumeros(state) {
      return state.numeros;
    },
  },
});
