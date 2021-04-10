import List from "./List.vue";
import CRUD from "./CRUD.vue";

export default [
  {
    path: "/cities",
    component: List,
    name: "Cities.list",
    meta: {
      module: "Cities",
      action: 'list',
      title: "Города",
    },
  },
  {
    path: "/cities/:id/edit",
    component: CRUD,
    name: "Cities.edit",
    meta: {
      module: "Cities",
      action: "edit",
      title: "Редактирование города",
    },
  },
  {
    path: "/cities/create",
    component: CRUD,
    name: "Cities.create",
    meta: {
      action: "create",
      title: "Создание города",
      module: "Cities",
    },
  },
  {
    path: "/cities/:id/show",
    component: CRUD,
    name: "Cities.info",
    meta: {
      action: "read",
      title: "Пользователь",
      module: "User",
    },
  },
];
