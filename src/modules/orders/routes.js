import List from "./List.vue";
import CRUD from "./CRUD.vue";

export default [
  {
    path: "/orders",
    component: List,
    name: "Orders.list",
    meta: {
      module: "Orders",
      action: 'list',
      title: "Заказы",
      roles: [
        'ROLE_ADMIN',
        'ROLE_WAITER'
      ]
    },
  },
  {
    path: "/orders/:id/show",
    component: CRUD,
    name: "Orders.info",
    meta: {
      action: "read",
      title: "Заказ",
      module: "Orders",
      roles: [
        'ROLE_ADMIN',
        'ROLE_WAITER'
      ]
    },
  },
];
