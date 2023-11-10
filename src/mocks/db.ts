import { factory, primaryKey } from '@mswjs/data'

const db = factory({
  user: {
    id: primaryKey(String),
    firstName: String,
    lastname: String,
  },
})

db.user.create({
  id: '1',
  firstName: 'Jaen',
  lastname: 'Figueroa',
})

db.user.create({
  id: '2',
  firstName: 'Ahinara',
  lastname: 'Victorazzi',
})

export default db
