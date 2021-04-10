import request from "@/utils/request";

export default {
  computed: {
    module() {
      return this.$route.meta.module.toLowerCase()
    }
  },
  watch: {
    page: async function() {
      await this.getList(this.page)
    }
  },
  data() {
    return {
      list: [],
      page: 1,
      countOfPages: 0
    };
  },
  methods: {
    goToEdit(id) {
      this.$router.push({
        name: `${this.$route.meta.module}.edit`,
        params: {
          id,
        },
      });
    },
    async getList(page = 1) {
      const loading = this.$vs.loading({
        target: this.$refs.tableContent
      })
      const { data } = await request.get(`/api/${this.module}?page=${page}`)
      loading.close()
      this.list = data.items
      this.countOfPages = data.countOfPages
    },
    async removeItem(id) {
      await request(`/api/${this.module}/${id}`, {
        method: "DELETE",
      });
      await this.getList();
    },
  },
  async mounted() {
    await this.getList();
  },
};
