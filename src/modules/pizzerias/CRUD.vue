<template>
  <div>
    <header-action
      @createAction="beforeCreate"
      @editAction="beforeEdit"
      @removeAction="remove"
    />
    <div class="form">
      <vs-input class="field" label="Название" v-model="form.name" />
      <vs-input class="field" label="Адрес" v-model="form.address" />
      <vs-select
        class="field"
        label="Город"
        v-model="form.city"
        filter
        :loading="citiesLoading"
        :key="citiesKey"
      >
        <vs-option
          v-for="city in cities"
          :key="city.id"
          :label="city.name"
          :value="city.id"
        >
          {{ city.name }}
        </vs-option>
      </vs-select>
    </div>
  </div>
</template>

<script>
import HeaderAction from "@/components/HeaderAction";
import CRUDMixin from "@/mixins/crud";
import request from "@/utils/request";

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
        address: "",
        city: "",
      },
      cities: [],
      citiesLoading: true,
      citiesKey: new Date().getTime()
    };
  },
  methods: {
    async fetchCities() {
      const { data } = await request.get("/api/cities/");
      this.cities = data.items;
      this.citiesLoading = false;
      this.citiesKey = new Date().getTime()
    },
    async beforeCreate() {
      this.form.city = `/api/cities/${this.form.city}`;
      await this.create();
    },
    async beforeEdit() {
      this.form.city = `/api/cities/${this.form.city}`;
      await this.edit();
    },
  },
  async mounted() {
    await this.fetchCities();
    if (this.form.city.id) {
      this.form.city = this.form.city.id;
    }
  },
};
</script>
