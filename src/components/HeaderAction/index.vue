<template>
  <div class="header-action">
    <h2>{{ title }}</h2>
    <div class="actions">
      <vs-button v-if="isList" circle gradient active @click="goToCreate"> Добавить </vs-button>
      <vs-button v-if="isCreate" success border @click="create">
        Создать
      </vs-button>
      <vs-button v-if="isEdit" border @click="edit">
        Изменить
      </vs-button>
      <vs-button v-if="isEdit || isShow" danger border @click="remove">
        Удалить
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title: function () {
      return this.$route.meta.title;
    },
    isList: function () {
      return this.$route.meta.action === "list";
    },
    isCreate: function () {
      return this.$route.meta.action === "create";
    },
    isEdit: function () {
      return this.$route.meta.action === "edit";
    },
    isShow: function () {
      return this.$route.meta.action === "show";
    },
  },
  methods: {
    goToCreate() {
      this.$router.push({
        name: `${this.$route.meta.module}.create`,
      });
    },
    create() {
      this.$emit("createAction");
    },
    edit() {
      this.$emit("editAction");
    },
    remove() {
      this.$emit("removeAction");
    },
  },
};
</script>

<style scoped>
.header-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.actions {
  display: flex;
}
</style>
