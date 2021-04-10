import List from './List.vue'
import CRUD from './CRUD.vue'

export default [
  {
      path: '/users',
      component: List,
      name: 'User.list',
      meta: {
          columns: [
              {
                  field: 'username',
                  label: 'Никнейм',
                  sortable: true,
                  filterOptions: {
                      enabled: true,
                      placeholder: 'Никнейм'
                  } 
              },
              {
                  field: 'firstName',
                  label: 'Имя',
                  sortable: true,
                  filterOptions: {
                      enabled: true,
                      placeholder: 'Имя'
                  } 
              },
              {
                  field: 'lastName',
                  label: 'Фамилия',
                  sortable: true,
                  filterOptions: {
                      enabled: true,
                      placeholder: 'Фамилия'
                  } 
              },
              {
                  field: 'email',
                  label: 'Email',
                  sortable: true,
                  filterOptions: {
                      enabled: true,
                      placeholder: 'Email'
                  } 
              },
              {
                  field: 'phone',
                  label: 'Телефон',
                  sortable: true,
                  filterOptions: {
                      enabled: true,
                      placeholder: 'Телефон'
                  } 
              }
              
          ],
          module: 'User',
          title: 'Пользователь',
      }
  },
  {
      path: '/user/:id/edit',
      component: CRUD,
      name: 'User.edit',
      meta: {
          action: 'edit',
          module: 'User',
          title: 'Пользователь',
      }
  },
  {
      path: '/user/create',
      component: CRUD,
      name: 'User.create',
      meta: {
          action: 'create',
          title: 'Пользователь',
          module: 'User',
      },
  },
  {
      path: '/user/:id/show',
      component: CRUD,
      name: 'User.info',
      meta: {
          action: 'read',
          title: 'Пользователь',
          module: 'User',
      }
  }
]
