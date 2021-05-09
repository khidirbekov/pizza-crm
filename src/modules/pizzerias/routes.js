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
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
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
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
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
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
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
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
    },
  },
];
