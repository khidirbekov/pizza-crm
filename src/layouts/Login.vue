<template>
  <div class="layout">
    <div class="login">
      <h2>Вход</h2>
      <vs-input
        primary
        class="input"
        v-model="username"
        icon-after
        label-placeholder="Name"
      >
        <template #icon>
          <i class="bx bx-user"></i>
        </template>
      </vs-input>

      <vs-input
        primary
        class="input"
        type="password"
        v-model="password"
        label-placeholder="Password"
        :visiblePassword="hasVisiblePassword"
        icon-after
        @click-icon="hasVisiblePassword = !hasVisiblePassword"
      >
        <template #icon>
          <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
          <i v-else class="bx bx-hide"></i>
        </template>
      </vs-input>
      <vs-button @click="login" class="button" active> Войти </vs-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  data() {
    return {
      hasVisiblePassword: false,
      username: "",
      password: "",
    };
  },
  methods: {
    login: async function() {
      const data = {
        username: this.username,
        password: this.password
      }
      const response = await request({
        url: '/api/login',
        method: 'post',
        data
      })
      const token = response.data.token
      window.localStorage.setItem('token', token)
      this.$store.commit('setAuth', true)
      const user = await request('/api/users/current')
      this.$store.commit('setUser', user.data)
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(var(--vs-gray-2));
}

.login {
  background: #fff;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, var(--vs-shadow-opacity));
  border-radius: 12px;
  display: flex;
  width: 300px;
  padding: 40px 40px 60px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

h2 {
  text-align: center;
}

.button {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<style>
.login .vs-input {
  background: rgba(var(--vs-gray-3), 1) !important;
}
</style>
