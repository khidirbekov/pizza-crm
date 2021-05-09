<template>
  <span class="main">
    <navbar />
    <transition appear>
      <div class="content">
        <router-view />
      </div>
    </transition>
  </span>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: flex-start;
}
</style>