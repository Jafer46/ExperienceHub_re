import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'

export default function Layout () {
  console.log('hi')
  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Sidebar />
      <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ml-4 md:pl-0'>
        <TopBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
