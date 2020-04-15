import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api',
  timeout: 10000
})
export default new Vuex.Store({
  state: {
    cars: []
  },
  mutations: {
  },
  actions: {
    async getCars({commit, dispatch}){
      try {
        let res = await _api.get('cars')
        console.log(res.data.data);
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
