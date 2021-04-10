import List from './List.vue'
import CRUD from './CRUD.vue'

export default [
  {
    path: "/orders",
    component: {
      template:
        '<div class="content-wrapper"><router-view></router-view></div>',
    },
    name: "Orders",
    meta: {
      showInMenu: true,
      title: "Заказы",
      menuKey: "Orders",
    },
    redirect: "orders",
    children: [
      {
        path: "",
        component: List,
        name: "Orders.list",
        meta: {
          menuKey: "Orders",
        },
      },
      {
        path: "CRUD/:id",
        component: CRUD,
        name: "Orders.CRUD",
        meta: {
          menuKey: "Orders",
        },
      },
      {
        path: ":id",
        component: CRUD,
        name: "Orders.info",
        meta: {
          menuKey: "Orders",
        },
      },
    ],
  },
];
