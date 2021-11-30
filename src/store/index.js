import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addActivity(state, activity) {
      state.user.activities.push(activity)
    }
  },
  actions: {
    fetchUsers(context) {
      fetch('http://localhost:3000/user')
        .then(resp => resp.json())
        .then(json => context.commit('setUser', json))
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
