import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
    users: [],
    activeUser: false
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    addUser(state, newUser) {
      state.users.push(newUser)
      router.push('/Login')
    },
    efetuateLogin(state, user) {
      state.users.forEach(usuario => {
        if (user.email == usuario.email && user.password == usuario.password) {
          state.activeUser = usuario
          router.push('/Usuário')
          console.log("Congrats")
        }
        else { console.log("Not available") }
      }) 
    },
    addActivity(state, activity) {
      state.activeUser.activities.push(activity)
    }
  },
  actions: {
    fetchUsers(context) {
      fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => context.commit('setUsers', json))
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
