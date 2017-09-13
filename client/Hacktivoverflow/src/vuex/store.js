import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  questions: []
}

const mutations = {
  setquestion (state, payload) {
    console.log('data di mutation sebagai payload', payload)
    state.questions = payload
  },
  savequestion (state, payload) {
    console.log('question buat di save', payload)
    state.questions.push(payload)
  }
}

const actions = {
  getallquestion ({commit}) {
    http.get('/question')
    .then(({ data }) => {
      console.log('data di actions', data)
      commit('setquestion', data)
    })
    .catch(err => console.error(err))
  },
  submitQuestion ({commit}, newquestion) {
    console.log('ini new question', newquestion)
    http.post('/question', newquestion)
    .then(({data}) => {
      console.log('data hasil submit question')
      commit('saveQuestion', data)
    })
    .catch(err => console.error(err))
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
