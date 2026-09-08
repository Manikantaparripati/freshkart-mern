import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Absolutely love the Andhra Mango Pickle! Tastes exactly like what my grandmother used to make. Fast delivery and great packaging too.',
    product: 'Andhra Mango Pickle',
    initials: 'PS',
    color: 'bg-primary-500',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    location: 'Delhi',
    rating: 5,
    comment: 'Ordered the Kaju Katli for Diwali — my whole family loved it! Very fresh and the quantity was generous. Will definitely order again.',
    product: 'Kaju Katli',
    initials: 'RV',
    color: 'bg-secondary-500',
  },
  {
    id: 3,
    name: 'Anjali Reddy',
    location: 'Hyderabad',
    rating: 4,
    comment: 'FreshKart has the best selection of authentic Indian snacks I\'ve found online. The Masala Chai Powder is perfect for my morning tea.',
    product: 'Masala Chai Powder',
    initials: 'AR',
    color: 'bg-accent-500',
  },
]

export default function CustomerReviews() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-sub">Real reviews from happy customers across India</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500" />
            ))}
            <span className="ml-2 text-gray-600 font-semibold">4.8 / 5 from 2,000+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-dark">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-secondary-500 text-secondary-500' : 'fill-gray-200 text-gray-200'}`}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.comment}"</p>

              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 inline-block" />
                Verified Purchase — {review.product}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
