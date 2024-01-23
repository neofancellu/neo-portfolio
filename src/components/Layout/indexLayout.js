import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/indexSidebar'
import './indexLayout.scss'

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet/>
        
      </div>
    </div>
  )
}

export default Layout
