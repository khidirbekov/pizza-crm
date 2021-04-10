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
        label="Город"
        v-model="form.city"
        filter
        :loading="citiesLoading"
        @change="(e) => console.log(e)"
      >
        <vs-option v-for="city in cities" :key="city.id" :label="city.name" :value="city.id">
          {{ city.name }}
        </vs-option>
      </vs-select>
    </div>
  </div>
</template>

<script>
import HeaderAction from "@/components/HeaderAction";
import CRUDMixin from '@/mixins/crud'
import request from '@/utils/request'

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
      citiesLoading: true
    };
  },
  methods: {
    async fetchCities() {
      const { data } = await request.get('/api/cities/')
      this.cities = data.items
      this.citiesLoading = false
    },
    async beforeCreate() {
      this.form.city = `/api/cities/${this.form.city}`
      await this.create()
    },
    async beforeEdit() {
      this.form.city = `/api/cities/${this.form.city}`
      await this.edit()
    }
  },
  async mounted() {
    await this.fetchCities()
    this.form.city = this.form.city.id
  }
};
</script>
