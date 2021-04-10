import request from "@/utils/request";

export default {
  computed: {
    module() {
      return this.$route.meta.module;
    },
  },
  methods: {
    async create() {
      const { data } = await request(`/api/${this.module.toLowerCase()}`, {
        method: "POST",
        data: { ...this.form },
      });
      this.$vs.notification({
        duration: 2000,
        flat: true,
        progress: 'auto',
        color: 'success',
        position: 'top-right',
        title: "Элемент успешно создан",
      });

      this.$router.push({ name: `${this.module}.list` });
    },
    async edit() {
      const { data } = await request(`/api/${this.module.toLowerCase()}/${this.id}`, {
        method: "PUT",
        data: { ...this.form },
      });
      this.$vs.notification({
        duration: 2000,
        flat: true,
        progress: 'auto',
        color: 'success',
        position: 'top-right',
        title: "Элемент успешно обновлен",
      });

      this.$router.push({ name: `${this.module}.list` });
    },
    async remove() {},
    isCreate() {
      return !this.$route.params.id;
    },
    async fetchData(id) {
      const { data } = await request.get(`/api/${this.module.toLowerCase()}/${id}`);
      this.form = {
        ...data,
      };
    },
  },
  async created() {
    if (this.isCreate()) {
      return;
    }
    this.id = this.$route.params.id;
    await this.fetchData(this.id);
    this.isFetched = true
  },
}