<template>
  <div class="wrapper">
    <img class="image" src="../../assets/access_denied.svg" alt="welcome" />
    <h1 class="title">Доступ запрещен!</h1>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 20px);
  margin: auto;
}

.title {
  margin-bottom: 80px;
}

.image {
  width: 400px;
}
</style>
