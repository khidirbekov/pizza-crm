import List from "./List.vue";
import CRUD from "./CRUD.vue";

export default [
  {
    path: "/pizzerias",
    component: List,
    name: "Pizzerias.list",
    meta: {
      module: "Pizzerias",
      action: 'list',
      title: "Пиццерии",
    },
  },
  {
    path: "/pizzerias/:id/edit",
    component: CRUD,
    name: "Pizzerias.edit",
    meta: {
      module: "Pizzerias",
      action: "edit",
      title: "Редактирование пиццерии",
    },
  },
  {
    path: "/pizzerias/create",
    component: CRUD,
    name: "Pizzerias.create",
    meta: {
      module: "Pizzerias",
      action: "create",
      title: "Создание пиццерии",
    },
  },
  {
    path: "/pizzerias/:id/show",
    component: CRUD,
    name: "Pizzerias.info",
    meta: {
      module: "Pizzerias",
      action: "read",
      title: "Пиццерия",
    },
  },
];
