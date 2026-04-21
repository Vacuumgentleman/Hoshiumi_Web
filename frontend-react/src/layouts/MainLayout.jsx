import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartDrawer from '../components/CartDrawer'
import { useTheme } from '../context/ThemeContext'
import './MainLayout.css'

export default function MainLayout() {
  const { dark } = useTheme()

  return (
    <div className={`layout ${dark ? 'dark' : 'light'}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CartDrawer />
      <Footer />
    </div>
  )
}
