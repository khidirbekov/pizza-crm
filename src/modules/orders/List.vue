<template>
  <div>
    <header-action :create='false' />
    <vs-table ref="tableContent" id="tableContent" striped>
      <template #thead>
        <vs-tr>
          <vs-th width="10"> ID </vs-th>
          <vs-th> Заказчик </vs-th>
          <vs-th> Дата заказа </vs-th>
          <vs-th> Сумма заказа </vs-th>
          <vs-th> Статус </vs-th>
          <vs-th> Действия </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in list" :data="tr">
          <vs-td>
            {{ tr.id }}
          </vs-td>
          <vs-td>
            {{ tr.customer }}
          </vs-td>
          <vs-td>
            {{ tr.dateCreate }}
          </vs-td>
          <vs-td>
            {{ tr.summaryPrice }}
            <i class='bx bx-ruble'></i>
          </vs-td>
          <vs-td>
            {{ PIZZA_STATUSES[tr.status] }}
          </vs-td>
          <vs-td>
            <div class="table-actions">
              <vs-button flat @click="() => goToShow(tr.id)">
                просмотреть
              </vs-button>
              <vs-button danger flat @click="() => removeItem(tr.id)">
                Удалить
              </vs-button>
            </div>
          </vs-td>
        </vs-tr>
      </template>
      <template #notFound> Элементов не найдено </template>
      <template v-if="countOfPages > 1" #footer>
        <vs-pagination v-model="page" :length="countOfPages" />
      </template>
    </vs-table>
  </div>
</template>

<script>
import HeaderAction from "@/components/HeaderAction";
import ListMixin from "@/mixins/list";
import { PIZZA_STATUSES } from '@/constants'

export default {
  components: {
    HeaderAction,
  },
  mixins: [ListMixin],
  data() {
    return {
      PIZZA_STATUSES
    }
  },
  methods: {
    goToShow(id) {
      this.$router.push(`/orders/${id}/show`)
    }
  }
};
</script>
