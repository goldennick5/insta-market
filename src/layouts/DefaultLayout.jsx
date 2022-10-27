import { Outlet } from 'react-router-dom'
import SideBar from '../components/UI/SideBar/SideBar'
import style from './defaultlayout.module.scss'

const DefaultLayout = () => {
  return (
    <div className={style.wrapper}>
      {/* <Header /> */}
      <p>Header</p>
      <div className={style.body}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout
