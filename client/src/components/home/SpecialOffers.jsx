import { Link } from 'react-router-dom'
import CountdownTimer from './CountdownTimer'
import { Sparkles, ArrowRight, Clock } from 'lucide-react'

export default function SpecialOffers() {
  // Set an offer ending 48 hours from now
  const offerEndTime = new Date(Date.now() + 48 * 60 * 60 * 1000)

  return (
    <section className="mb-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="section-heading flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary-500" /> Special Deals & Offers
          </h2>
          <p className="text-sm text-gray-500">
            Handpicked seasonal promotions and limited-time discounts
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deal 1 with Countdown */}
        <div className="rounded-3xl p-8 bg-gradient-to-br from-primary-500 via-primary-600 to-orange-700 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-orange-500/15">
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                ⚡ Flash Deal
              </span>
              <div className="flex items-center gap-1.5 text-xs text-white/90">
                <Clock className="w-3.5 h-3.5" />
                <span>Ends in:</span>
              </div>
            </div>

            <h3 className="text-3xl font-extrabold mb-1">Get 20% Off</h3>
            <p className="text-white/85 text-sm mb-6 max-w-sm">
              Authentic Andhra Mango & Gongura pickles made with traditional cold-pressed oils.
            </p>

            {/* Countdown timer */}
            <div className="mb-8">
              <CountdownTimer endsAt={offerEndTime} />
            </div>
          </div>

          <div className="relative z-10">
            <Link
              to="/category/pickles"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-6 py-3 rounded-2xl hover:bg-orange-50 transition shadow-md"
            >
              Shop Pickles Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Deal 2: Festive Sweets */}
        <div className="rounded-3xl p-8 bg-gradient-to-br from-amber-400 via-secondary-500 to-amber-600 text-dark flex flex-col justify-between relative overflow-hidden shadow-lg shadow-amber-500/15">
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="bg-dark/10 backdrop-blur-md text-dark text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                🎁 Festive Special
              </span>
              <span className="text-xs font-bold text-dark/70">
                Code: <strong>FESTIVE30</strong>
              </span>
            </div>

            <h3 className="text-3xl font-extrabold mb-1">Flat 30% Off</h3>
            <p className="text-dark/80 text-sm mb-6 max-w-sm">
              Artisanal Kaju Katli, Mysore Pak, and Dry Fruit Celebration Gift Hampers.
            </p>

            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2.5 rounded-2xl mb-8 border border-white/40">
              <span className="text-2xl">🪔</span>
              <div>
                <p className="text-xs font-bold text-dark">Diwali & Festive Pre-Orders</p>
                <p className="text-[11px] text-dark/70">Guaranteed dispatch within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Link
              to="/category/sweets"
              className="inline-flex items-center gap-2 bg-dark text-white font-bold px-6 py-3 rounded-2xl hover:bg-dark/90 transition shadow-md"
            >
              Explore Sweets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
