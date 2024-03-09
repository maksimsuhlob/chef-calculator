type AuthorizationPage = 'login'|'registration'| 'restore-password'

export const NavigationRoutes = {
  home: 'home',
  guestPage: 'guest-page',
  authorization: (page:AuthorizationPage) => { return (`authorization/${page}`) },
  stock: 'stock',
  product: 'stock/[product]',
}
