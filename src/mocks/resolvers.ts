import { HttpResponse } from 'msw'
import db from './db'

export const userResolver = () => {
  // el resolver usa el db para obtener los datos
  return HttpResponse.json(db.user.getAll())
}
