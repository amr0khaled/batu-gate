import { Outlet } from 'react-router'


// TODO: Create the dashboard layout to wrap other pages
export default function DashboardLayout() {
  return <div className='bg-red-50 px-4 pl-8'>
    <Outlet />
  </div>
}
