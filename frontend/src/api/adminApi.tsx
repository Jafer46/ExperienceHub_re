import { Role } from '@/constants/schema'
import axios from 'axios'

const baseUrl = import.meta.env.BASE_URL

export const getRoles = (token: string) =>
  axios
    .post(`${baseUrl}/role`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
    .catch(err => {
      throw err
    })

export const getRole = (id: string, token: string) =>
  axios
    .get(`${baseUrl}/role/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
    .catch(err => {
      throw err
    })

export const createRole = (data: Role, token: string) =>
  axios
    .post(`${baseUrl}/role`, data, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
    .catch(err => {
      throw err
    })

export const deleteRole = (id: string, token: string) =>
  axios
    .delete(`${baseUrl}/role/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
