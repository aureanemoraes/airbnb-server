'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create');

Route.resource('/properties', 'PropertyController').apiOnly().middleware('auth')

Route.post('/properties/:id/images', 'ImageController.store')
  .middleware(['auth'])

  Route.get('/images/:path', 'ImageController.show').middleware(['auth'])