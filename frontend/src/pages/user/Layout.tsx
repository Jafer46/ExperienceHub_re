import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

export default function Layout () {
  console.log('hi')
  return (
    <div className='h-[200vh]'>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
