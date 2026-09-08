import { Link } from 'react-router-dom'
export default function FeaturedCategories() {
  const cats = [
    { name: 'Snacks', icon: '🥨', slug: 'snacks' },
    { name: 'Sweets', icon: '🍯', slug: 'sweets' },
    { name: 'Pickles', icon: '🥭', slug: 'pickles' },
    { name: 'Spices', icon: '🌶️', slug: 'spices' },
    { name: 'Ready to Eat', icon: '🍛', slug: 'ready-to-eat' },
    { name: 'Dry Fruits', icon: '🥜', slug: 'dry-fruits' },
    { name: 'Beverages', icon: '☕', slug: 'beverages' },
    { name: 'Gift Packs', icon: '🎁', slug: 'gift-packs' },
  ]
  return (
    <section id="categories" className="mb-16">
      <h2 className="section-heading text-center">Shop by Category</h2>
      <p className="section-sub text-center">Discover our wide range of authentic products</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {cats.map(c => (
          <Link key={c.slug} to={`/category/${c.slug}`} className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <span className="text-4xl mb-3">{c.icon}</span>
            <span className="font-semibold text-sm text-center">{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
