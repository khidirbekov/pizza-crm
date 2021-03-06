import List from "./List.vue";
import CRUD from "./CRUD.vue";

export default [
  {
    path: "/pizzas",
    component: List,
    name: "Pizzas.list",
    meta: {
      module: "Pizzas",
      action: 'list',
      title: "Пиццы",
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
    },
  },
  {
    path: "/pizzas/:id/edit",
    component: CRUD,
    name: "Pizzas.edit",
    meta: {
      module: "Pizzas",
      action: "edit",
      title: "Редактирование пиццы",
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
    },
  },
  {
    path: "/pizzas/create",
    component: CRUD,
    name: "Pizzas.create",
    meta: {
      module: "Pizzas",
      action: "create",
      title: "Создание пиццы",
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
    },
  },
  {
    path: "/pizzas/:id/show",
    component: CRUD,
    name: "Pizzas.info",
    meta: {
      module: "Pizzas",
      action: "read",
      title: "Пицца",
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
    },
  },
];
