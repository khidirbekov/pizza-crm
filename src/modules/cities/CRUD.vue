<template>
  <div>
    <header-action
      @createAction="create"
      @editAction="edit"
      @removeAction="remove"
    />
    <div class="form">
      <vs-input class="field" label="Название" v-model="form.name" />
      <vs-input class="field" label="Долгота" v-model="form.longitude" />
      <vs-input class="field" label="Широта" v-model="form.latitude" />
    </div>
  </div>
</template>

<script>
import HeaderAction from "@/components/HeaderAction";
import CRUDMixin from '@/mixins/crud'

export default {
  mixins: [CRUDMixin],
  components: {
    HeaderAction,
  },
  data() {
    return {
      id: null,
      form: {
        name: "",
        longitude: "",
        latitude: "",
      },
    };
  },
};
</script>
