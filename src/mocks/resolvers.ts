import { HttpResponse } from 'msw'

export const petsResolver = () => {
  return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
}

export const repoResolver = () => {
  return HttpResponse.json({ username: 'jaenfigueroa', repo: 'poc_msw' })
}

export const userResolver = () => {
  return HttpResponse.json({ name: 'John Doe', age: 32 })
}

export const resolver = () => {
  return HttpResponse.json({ message: 'success' })
}
