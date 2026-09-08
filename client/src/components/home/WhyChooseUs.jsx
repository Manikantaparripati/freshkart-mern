import { Leaf, Truck, CreditCard, RefreshCw } from 'lucide-react'
export default function WhyChooseUs() {
  const features = [
    { icon: Leaf, title: '100% Natural', desc: 'No artificial preservatives or colours' },
    { icon: Truck, title: 'Fast Delivery', desc: 'Free delivery on orders above ₹499' },
    { icon: RefreshCw, title: 'Easy Returns', desc: 'No questions asked return policy' },
    { icon: CreditCard, title: 'Secure Payment', desc: '100% secure payment gateways' },
  ]
  return (
    <section className="mb-16 py-12 bg-white rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        {features.map((f, i) => (
          <div key={i} className="text-center flex flex-col items-center">
            <div className="bg-primary-50 p-4 rounded-full text-primary-500 mb-4"><f.icon className="w-8 h-8"/></div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
