import { useState } from 'react'
import toast from 'react-hot-toast'
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const submit = (e) => {
    e.preventDefault()
    if(email) { toast.success('Subscribed successfully!'); setEmail('') }
  }
  return (
    <section className="mb-16 bg-warm-100 rounded-3xl p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Updates & Special Offers</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">Subscribe to our newsletter and get 10% off your first order.</p>
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <input type="email" placeholder="Enter your email" required value={email} onChange={e=>setEmail(e.target.value)} className="flex-1 input-field" />
        <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
      </form>
    </section>
  )
}
