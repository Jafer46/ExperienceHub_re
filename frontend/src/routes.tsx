import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/user/Layout'
import AdminLayout from './pages/Admin/Layout'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: []
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: []
  }
])
