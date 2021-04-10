<template>
  <div id="app">
    <navbar />
    <transition appear>
      <div class="content">
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>
