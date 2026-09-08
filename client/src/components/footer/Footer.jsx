import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-primary-500 mb-4">FreshKart</h2>
          <p className="text-gray-400 mb-4 text-sm">Authentic Indian snacks, sweets, pickles, and more delivered fresh to your door.</p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-primary-500">About Us</a></li>
            <li><a href="#" className="hover:text-primary-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary-500">FAQs</a></li>
            <li><a href="#" className="hover:text-primary-500">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/category/snacks" className="hover:text-primary-500">Snacks</a></li>
            <li><a href="/category/sweets" className="hover:text-primary-500">Sweets</a></li>
            <li><a href="/category/pickles" className="hover:text-primary-500">Pickles</a></li>
            <li><a href="/category/spices" className="hover:text-primary-500">Spices</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2"><MapPin className="w-5 h-5 flex-shrink-0" /> 123 Food Street, Tech City, India 500081</li>
            <li className="flex items-center gap-2"><Phone className="w-5 h-5 flex-shrink-0" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="w-5 h-5 flex-shrink-0" /> support@freshkart.in</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; 2026 FreshKart. All rights reserved.</p>
        <p className="mt-2 md:mt-0">FSSAI License No: 100123456789</p>
      </div>
    </footer>
  )
}
