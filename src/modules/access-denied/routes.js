import AccessDenied from './'

export default [
    {
      path: "/401",
      component: AccessDenied,
      name: "AccessDenied",
      meta: {
        module: "AccessDenied",
        title: "Доступ запрещен",
      },
    },
]