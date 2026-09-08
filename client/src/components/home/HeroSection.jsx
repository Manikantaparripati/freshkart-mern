import { Link } from 'react-router-dom'
import { ShieldCheck, Truck, RefreshCcw } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-warm-100 to-orange-50 mb-12 py-16 px-8 md:px-16 flex items-center min-h-[400px]">
      <div className="max-w-2xl relative z-10 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight mb-6">
          Authentic Indian Flavours, <br className="hidden md:block"/>
          <span className="text-primary-500">Delivered Fresh</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          Experience the true taste of India with our handpicked selection of premium snacks, traditional sweets, and homemade pickles.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <Link to="/products" className="btn-primary py-3 px-8 text-lg">Shop Now</Link>
          <Link to="#categories" className="btn-outline py-3 px-8 text-lg bg-white bg-opacity-50">Explore Categories</Link>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-700">
          <div className="flex items-center gap-2"><Truck className="text-primary-500 w-5 h-5"/> Free Delivery</div>
          <div className="flex items-center gap-2"><ShieldCheck className="text-accent-500 w-5 h-5"/> 100% Natural</div>
          <div className="flex items-center gap-2"><RefreshCcw className="text-primary-500 w-5 h-5"/> Easy Returns</div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block bg-gradient-to-l from-primary-100 to-transparent opacity-50"></div>
    </div>
  )
}
