import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import AnnouncementBar from '../components/navbar/AnnouncementBar'
import MobileBottomNav from '../components/navbar/MobileBottomNav'

const MainLayout = () => (
  <div className="min-h-screen flex flex-col relative pb-16 md:pb-0">
    <AnnouncementBar />
    <Navbar />
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      <Outlet />
    </main>
    <Footer />
    <MobileBottomNav />
  </div>
)
export default MainLayout
