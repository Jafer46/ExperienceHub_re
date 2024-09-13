import { GENERALROLES } from '@/constants/generalRoles'
import useAuth from '@/store/authstore'
import { Navigate, Outlet } from 'react-router-dom'

export default function AdminLayout () {
  // const { user } = useAuth()

  // if (!user) {
  //   return <Navigate to='/login' />
  // }

  // if (user.role.generalRole !== GENERALROLES.ADMIN) {
  //   return <Navigate to='/' />
  // }

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
