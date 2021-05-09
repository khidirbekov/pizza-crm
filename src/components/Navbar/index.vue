<template>
  <vs-sidebar open class="navbar" v-model="isActive">
    <template #logo>
      <img src="@/assets/logo.svg" alt="logo" />
    </template>
    <vs-sidebar-item v-if="roles.includes('ROLE_ADMIN')" id="Cities">
      <template #icon>
        <i class="bx bxs-city"></i>
      </template>
      <router-link to="/cities"> Города </router-link>
    </vs-sidebar-item>
    <vs-sidebar-item
      v-if="roles.includes('ROLE_ADMIN') || roles.includes('ROLE_MANAGER')"
      id="Pizzerias"
    >
      <template #icon>
        <i class="bx bx-restaurant"></i>
      </template>
      <router-link to="/pizzerias"> Пиццерии </router-link>
    </vs-sidebar-item>
    <vs-sidebar-item
      v-if="roles.includes('ROLE_ADMIN') || roles.includes('ROLE_MANAGER')"
      id="Pizzas"
    >
      <template #icon>
        <i class="bx bxs-pizza"></i>
      </template>
      <router-link to="/pizzas"> Пиццы </router-link>
    </vs-sidebar-item>
    <vs-sidebar-item
      v-if="roles.includes('ROLE_ADMIN') || roles.includes('ROLE_MANAGER')"
      id="Users"
    >
      <template #icon>
        <i class="bx bxs-group"></i>
      </template>
      <router-link to="/users"> Сотрудники </router-link>
    </vs-sidebar-item>
    <vs-sidebar-item
      v-if="roles.includes('ROLE_ADMIN') || roles.includes('ROLE_WAITER')"
      id="Orders"
    >
      <template #icon>
        <i class="bx bxs-box"></i>
      </template>
      <router-link to="/orders"> Заказы </router-link>
    </vs-sidebar-item>
    <template #footer>
      <vs-sidebar-item>
        <template #icon>
          <i class="bx bxs-exit"></i>
        </template>
        <span @click="logout">Выход</span>
      </vs-sidebar-item>
    </template>
  </vs-sidebar>
</template>

<script>
export default {
  computed: {
    isActive: {
      get: function () {
        const activeSidebarLink = this.$route.meta.module
        return activeSidebarLink
      },
      set: function() {
        
      }
    },
    roles() {
      return this.$store.getters['getUser']?.roles || []
    }
  },
  methods: {
    logout() {
      window.localStorage.removeItem('token')
      this.$store.commit('setAuth', false)
      this.$router.push('/login')
    }
  }
};
</script>

<style>
.navbar * {
  color: var(--vs-primary);
  text-decoration: none;
}
</style>
