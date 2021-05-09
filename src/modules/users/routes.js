import List from "./List.vue";
import CRUD from "./CRUD.vue";

export default [
  {
    path: "/users",
    component: List,
    name: "Users.list",
    meta: {
      module: "Users",
      action: 'list',
      title: "Сотрудники",
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
    },
  },
  {
    path: "/users/:id/edit",
    component: CRUD,
    name: "Users.edit",
    meta: {
      module: "Users",
      action: "edit",
      title: "Редактирование сотрудника",
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
    },
  },
  {
    path: "/users/create",
    component: CRUD,
    name: "Users.create",
    meta: {
      module: "Users",
      action: "create",
      title: "Создание сотрудника",
      roles: [
        'ROLE_ADMIN',
        'ROLE_MANAGER'
      ]
    },
  },
];
