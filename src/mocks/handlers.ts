import { http, HttpResponse, passthrough } from 'msw'
// import { petsResolver, repoResolver, resolver, userResolver } from './resolvers'

export const handlers = [
  // http.get('/pets', petsResolver),
  // http.post('https://api.github.com/repo', repoResolver),

  // // Intercept all GET requests to "/user":
  // // - GET /user
  // // - GET /user/abc-123
  // // - GET /user/abc-123/settings
  // http.get('/user/*', userResolver),

  // // Intercept DELETE requests matching the regular expression.
  // // - DELETE /settings/sessions
  // // - DELETE /settings/messages
  // http.delete(/\/settings\/(sessions|messages)/, resolver),

  // http.get('/post/:postId', ({ params }) => {
  //   const { postId } = params
  //   console.log(postId)
  // }),

  /* EJEMPLO 1 */
  http.get('/api/user/:id', ({ params }) => {
    const { id } = params

    // Devuelve una respuesta simulada solo cuando
    // requesting "GET /user/abc-123".
    if (id === 'abc-123') {
      return HttpResponse.json({
        id,
        name: 'John',
      })
    }

    // De lo contrario, realice la solicitud tal cual.
    return passthrough()
  }),
]
