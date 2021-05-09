<template>
  <div>
    <header-action @createAction="beforeCreate" @editAction="beforeEdit" @removeAction="remove" />
    <div class="form">
      <vs-input class="field" label="Логин" v-model="form.username" />
      <vs-input class="field" label="Имя" v-model="form.name" />
      <vs-input class="field" label="Фамилия" v-model="form.surname" />
      <vs-input class="field" label="Телефон" v-model="form.phone" />
      <vs-select class="field" label="Роль" v-model="form.roles">
        <vs-option
          v-for="role in roles"
          :key="role.value"
          :label="role.label"
          :value="role.value"
        >
          {{ role.label }}
        </vs-option>
      </vs-select>
      <vs-input
        v-if="!isEdit"
        class="field"
        label="Пароль"
        type="password"
        :visiblePassword="hasVisiblePassword"
        v-model="form.password"
        icon-after
        @click-icon="hasVisiblePassword = !hasVisiblePassword"
      >
        <template #icon>
          <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
          <i v-else class="bx bx-hide"></i>
        </template>
      </vs-input>
    </div>
  </div>
</template>

<script>
import HeaderAction from "@/components/HeaderAction";
import CRUDMixin from "@/mixins/crud";
import request from "@/utils/request";
import { ROLES } from "@/constants";

const apiHost = process.env.VUE_APP_TARGET;

export default {
  mixins: [CRUDMixin],
  components: {
    HeaderAction,
  },
  computed: {
    isEdit: function () {
      return this.$route.meta.action === "edit";
    },
  },
  data() {
    return {
      roles: ROLES,
      isFetched: false,
      id: null,
      hasVisiblePassword: false,
      form: {
        username: "",
        name: "",
        surname: "",
        phone: "",
        roles: [],
        password: "",
      },
    };
  },
  methods: {
    async beforeCreate() {
      if (typeof this.form.roles === "string")
        this.form.roles = [this.form.roles];
      await this.create();
    },
    async beforeEdit() {
      if (typeof this.form.roles === "string")
        this.form.roles = [this.form.roles];
      await this.edit();
    },
  },
  mounted() {
    console.log(this.remove)
  }
};
</script>

<style scoped>
.file-input {
  width: 250px;
  margin-top: 10px;
}
.image-field {
  width: 300px;
}

.image-field img {
  width: 100%;
}

.upload-label {
  padding-left: 10px;
  margin-top: 20px;
}

.upload-btn {
  margin-left: 0;
  margin-top: 0;
}
</style>
