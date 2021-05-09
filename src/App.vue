<template>
  <div id="app">
    <Main v-if="$store.getters.getAuth" />
    <Login v-else />
  </div>
</template>

<script>
import Main from './layouts/Main.vue';
import Login from './layouts/Login.vue'
import { isTokenExpire } from './utils/auth'
import request from './utils/request'

export default {
  name: "App",
  components: {
    Main,
    Login
  },
  async created() {
    const token = window.localStorage.getItem('token')
    if (!token) {
      this.$store.commit('setAuth', false)
      this.$router.push('/login')
      return
    }

    if (isTokenExpire(token)) {
      window.localStorage.removeItem('token')
      this.$store.commit('setAuth', false)
      return
    }

    this.$store.commit('setAuth', true)
    const { data } = await request('/api/users/current')
    this.$store.commit('setUser', data)
  }
};
</script>
