<template>
  <div class="wrapper">
    <h1 class="title">
      Добро пожаловать!
    </h1>
    <img class="image" src='../../assets/welcome.svg' alt='welcome' />
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    width: 100%;
    height: 100%;
    margin: auto;
  }

  .title {
    margin-bottom: 80px;
  }

  .image {
    width: 400px;
  }
</style>