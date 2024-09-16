import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/user/Layout'
import AdminLayout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import UserManagement from './pages/Admin/UserManagement'
import Messages from './pages/user/Messages'
import Feed from './pages/user/Feed'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Feed /> },
      { path: 'messages', element: <Messages /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'users', element: <UserManagement /> }
    ]
  }
])
