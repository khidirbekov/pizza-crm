<template>
  <div>
    <header-action />
    <vs-table  ref="tableContent" id="tableContent" striped>
      <template #thead>
        <vs-tr>
          <vs-th width="10"> ID </vs-th>
          <vs-th> Логин </vs-th>
          <vs-th> ФИО </vs-th>
          <vs-th> Телефон </vs-th>
          <vs-th> Действия </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in list" :data="tr">
          <vs-td>
            {{ tr.id }}
          </vs-td>
          <vs-td>
            {{ tr.username }}
          </vs-td>
          <vs-td>
            {{ tr.name }} {{ tr.surname }}
          </vs-td>
          <vs-td>
            {{ tr.phone }}
          </vs-td>
          <vs-td>
            <div class="table-actions">
              <vs-button flat @click="() => goToEdit(tr.id)">
                Изменить
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

export default {
  components: {
    HeaderAction,
  },
  mixins: [ListMixin],
};
</script>

<style scoped>
.tr-image {
  width: 150px;
}
</style>
