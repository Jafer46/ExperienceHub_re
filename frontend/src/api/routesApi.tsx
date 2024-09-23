import { Route } from '@/constants/schema'
import axios from 'axios'

export const getGuestRoutes = () =>
  axios
    .get<Route[]>('/routes/guest')
    .then(res => res.data)
    .catch(err => {
      throw err
    })

export const getRoutes = (token: string) =>
  axios
    .get<Route[]>('/routes', { headers: { Authorization: `Bearer ${token}` } })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
