import { http } from 'msw'
import { userResolver } from './resolvers'

export const handlers = [
  // primero se ejecuta el resolver y luego el handler
  http.get('/users', userResolver),
]
