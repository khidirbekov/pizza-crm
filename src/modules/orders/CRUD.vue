<template>
  <div>
    <header-action />
    <div>
      <div>
        <p><i class="bx bxs-user"></i> {{ order.customer }}</p>
      </div>
      <div>
        <p><i class="bx bxs-phone"></i> {{ order.phone }}</p>
      </div>
      <div>
        <p>
          <i class="bx bx-calendar"></i>
          {{ dayjs(order.dateCreate).format('HH:mm DD.MM.YYYY') }}
        </p>
      </div>
      <div>
        <p><i class="bx bxs-city"></i> {{ order.pizzeria.city.name }}</p>
      </div>
      <div>
        <p>
          <i class="bx bxs-pizza"></i> {{ order.pizzeria.name }},
          {{ order.pizzeria.address }}
        </p>
      </div>
      <div>
        <p><strong>Состав</strong></p>
        <vs-table striped>
          <template #thead>
            <vs-tr>
              <vs-th> Название </vs-th>
              <vs-th> Количество </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr :key="i" v-for="(tr, i) in order.pizzaGroups" :data="tr">
              <vs-td class="pizza">
                <img
                  class="img"
                  :src="`${baseURL}/uploads/${tr.pizza.image.path}`"
                  alt="pizza"
                />
                {{ tr.pizza.name }}
              </vs-td>
              <vs-td>
                {{ tr.count }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
        <span
          ><strong>Сумма</strong> {{ order.summaryPrice }}
          <i class="bx bx-ruble"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAction from "@/components/HeaderAction";
import request from '@/utils/request'
import dayjs from 'dayjs'

export default {
  components: {
    HeaderAction,
  },
  computed: {
    module() {
      return this.$route.meta.module;
    },
  },
  data() {
    return {
      id: null,
      dayjs,
      order: null,
      baseURL: `${process.env.VUE_APP_TARGET}`,
    }
  },
  methods: {
    async fetchData(id) {
      const { data } = await request.get(`/api/${this.module.toLowerCase()}/${id}`);
      this.order = {
        ...data,
      };
    },
  },
  async created() {
    this.id = this.$route.params.id;
    await this.fetchData(this.id);
    this.isFetched = true
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  max-width: 750px;
  margin: 45px auto;
  padding: 40px 40px 60px;
  background: rgb(var(--vs-gray-1));
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  border-radius: 15px;
}
.title {
  text-align: center;
}
p {
  margin: 10px 0;
}
.img {
  width: 45px;
  object-fit: contain;
  margin-right: 6px;
}
.pizza {
  display: flex;
  align-items: center;
}
</style>