import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isAuth: false,
      user: null
    },
    mutations: {
      setAuth(state, flag) {
        state.isAuth = flag
      },
      setUser(state, user) {
        state.user = user
      }
    },
    getters: {
      getAuth: state => {
        return state.isAuth
      },
      getUser: state => {
        return state.user
      }
    }
  })
}

export default createStore