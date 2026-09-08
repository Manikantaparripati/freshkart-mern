import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/home/HeroSection'
import FeaturedCategories from '../components/home/FeaturedCategories'
import BestSellers from '../components/home/BestSellers'
import NewArrivals from '../components/home/NewArrivals'
import SpecialOffers from '../components/home/SpecialOffers'
import WhyChooseUs from '../components/home/WhyChooseUs'
import CustomerReviews from '../components/home/CustomerReviews'
import Newsletter from '../components/home/Newsletter'
import { useSelector } from 'react-redux'

export default function HomePage() {
  const { isAuthenticated, user } = useSelector((s) => s.auth)

  return (
    <>
      <Helmet>
        <title>FreshKart - Authentic Indian Food Delivered Fresh</title>
        <meta name="description" content="Shop authentic Indian snacks, pickles, sweets, spices and more online. Free delivery on orders above ₹499." />
        <meta property="og:title" content="FreshKart - Fresh Indian Food Online" />
        <meta property="og:description" content="Premium Indian food products delivered to your door." />
      </Helmet>

      <div className="animate-fade-in">
        {/* Personalized welcome for logged-in users */}
        {isAuthenticated && user && (
          <div className="bg-gradient-to-r from-primary-50 to-orange-50 border-b border-orange-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <p className="text-sm font-medium text-primary-700">
                👋 Welcome back, <strong>{user.name?.split(' ')[0]}</strong>! Explore what's new for you today.
              </p>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <HeroSection />
          <FeaturedCategories />
          <BestSellers />
          <NewArrivals />
          <SpecialOffers />
          <WhyChooseUs />
          <CustomerReviews />
          <Newsletter />
        </div>
      </div>
    </>
  )
}
