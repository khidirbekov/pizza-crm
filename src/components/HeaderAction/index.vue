<template>
  <div class="header-action">
    <h2>{{ title }}</h2>
    <div class="actions">
      <vs-button v-if="isList && create" circle gradient active @click="goToCreate"> Добавить </vs-button>
      <vs-button v-if="isCreate && create" success border @click="createAction">
        Создать
      </vs-button>
      <vs-button v-if="isEdit && edit" border @click="editAction">
        Изменить
      </vs-button>
      <vs-button v-if="(isEdit || isShow) && remove" danger border @click="removeAction">
        Удалить
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    create: {
      type: Boolean,
      default: true
    },
    edit: {
      type: Boolean,
      default: true
    },
    remove: {
      type: Boolean,
      default: true
    }
  },
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
    createAction() {
      this.$emit("createAction");
    },
    editAction() {
      this.$emit("editAction");
    },
    removeAction() {
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
