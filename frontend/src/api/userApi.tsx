import axios from 'axios'

const baseUrl = import.meta.env.BASE_URL

export const register = (data: any) =>
  axios
    .post(`${baseUrl}/register`, data)
    .then(res => res.data)
    .catch(err => {
      throw err
    })

export const login = (data: any) =>
  axios
    .post(`${baseUrl}/login`, data)
    .then(res => res.data)
    .catch(err => {
      throw err
    })
