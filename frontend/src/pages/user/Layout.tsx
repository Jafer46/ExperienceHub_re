import { Outlet } from 'react-router-dom'

export default function Layout () {
  console.log('hi')
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
