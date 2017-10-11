import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  // baseURL: 'http://35.197.131.206'
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  questions: [],
  user: [],
  onequestion: []
}

const mutations = {
  setquestion (state, payload) {
    console.log('data di mutation sebagai payload', payload)
    state.questions = payload
  },
  savequestion (state, payload) {
    console.log('question buat di save', payload)
    state.questions.push(payload)
  },
  saveuser (state, payload) {
    console.log('user buat di save', payload)
    state.user = payload
  },
  deletequestion (state, payload) {
    // cara kedua
    console.log('ini isi payload', payload)
    var filteredQustion = state.questions.filter((quest) => quest._id !== payload)
    console.log('ini state sebelum di hapus', state.questions)
    state.questions = filteredQustion
    console.log('ini state setelah di filter', state.questions)
    // cara pertama
    // console.log('id artikel yang mau di hapus', payload)
    // const idx = state.questions.findIndex((question) => (question._id === payload))
    // console.log(idx)
    // state.questions.splice(idx, 1)
  },
  editquestion (state, payload) {

  },
  setonequestion (state, payload) {
    console.log('data di mutation sebagai payload', payload)
    state.onequestion = payload
  },
  saveanswer (state, payload) {
    console.log('answer buat di push ke answer question', payload)
    state.onequestion.answer.push(payload)
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
    var config = {
      headers: {'token': localStorage.getItem('token')}
    }
    http.post('/question', newquestion, config)
    .then(({data}) => {
      console.log('data hasil submit question')
      commit('savequestion', data)
    })
    .catch(err => console.error(err))
  },
  submitUser ({commit}, newuser) {
    console.log('ini new user', newuser)
    http.post('/users/signup', newuser)
    .then(({data}) => {
      console.log('data hasil submit user')
      commit('saveuser', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  deletequestion ({commit}, questionid) {
    console.log('ini id delete', questionid)
    var config = {
      headers: {'token': localStorage.getItem('token')}
    }
    http.delete(`/question/${questionid}`, config)
    .then(({data}) => {
      console.log('data berhasil di delete', data)
      commit('deletequestion', questionid)
    })
    .catch(err => {
      console.log(err)
    })
  },
  editquestion ({commit}, updatequestion) {
    // console.log('ini id quest edit', questionid)
    console.log('ini updatequestion', updatequestion)
    var config = {
      headers: {'token': localStorage.getItem('token')}
    }
    http.put(`/question/${updatequestion._id}`, updatequestion, config)
    .then(({data}) => {
      console.log('data updated', data)
      // commit(`editquestion`, questionid)
    })
    .catch(err => {
      console.log('andatidakpunyahak', err)
    })
  },
  submitreply ({commit}, newreply) {
    console.log('ini newreply', newreply.replycontent)
    console.log('ini idquest', newreply.idquest)
    var config = {
      headers: {'token': localStorage.getItem('token')}
    }
    http.post(`/question/${newreply.idquest}/reply`, newreply, config)
    .then(({data}) => {
      console.log('input reply', data)
      commit('saveanswer', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  getonequestion ({commit}, id) {
    console.log('ini id nya', id)
    http.get(`/question/` + id)
    .then(({data}) => {
      console.log('ini data', data)
      commit('setonequestion', data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store

// login ({commit}, user) {
//   console.log('ini user', user)
//   http.post('/users/signin', user)
//   .the(({data}) => {
//     console.log('data hasil login')
//     commit()
//   })
// }
// },
// datalogin (state, payload) {
//   console.log('data hasil login', payload)
