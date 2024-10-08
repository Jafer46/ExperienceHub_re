export interface User {
  _id?: string
  username: string
  email?: string
  avatar?: string
  password?: string
  status?: number
  freinds?: User[]
  role?: Role
}

export interface Role {
  _id: string
  name: string
  description: string
  generalRole: string
  allowedRoutes?: Route[]
}

export interface Route {
  _id?: string
  name: string
  path: string
}

export interface Post {
  _id?: string
  name: string
  description: string
  pictures: string[]
  rate: number
  number_of_rates: number
  payment_per_night: number
  number_of_beds: number
}
