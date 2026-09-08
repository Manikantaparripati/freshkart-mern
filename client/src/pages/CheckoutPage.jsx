import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../store/slices/cartSlice'
import { CheckCircle, MapPin, Truck, CreditCard, ClipboardList } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../services/api'
import { FOOD_FALLBACK_SVG } from '../utils/imageUtils'

const STEPS = [
  { id: 1, label: 'Address', icon: MapPin },
  { id: 2, label: 'Delivery', icon: Truck },
  { id: 3, label: 'Payment', icon: CreditCard },
  { id: 4, label: 'Review', icon: ClipboardList },
]

export default function CheckoutPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { items, totalPrice, shippingPrice, taxPrice, grandTotal, coupon } = useSelector((s) => s.cart)

  const [step, setStep] = useState(1)
  const [placing, setPlacing] = useState(false)

  const [address, setAddress] = useState({
    fullName: '', phone: '', street: '', city: '', state: '', zipCode: '', country: 'India',
  })
  const [delivery, setDelivery] = useState('standard')
  const [payment, setPayment] = useState('COD')

  const handleAddressChange = (e) =>
    setAddress((a) => ({ ...a, [e.target.name]: e.target.value }))

  const handlePlaceOrder = async () => {
    setPlacing(true)
    try {
      const orderData = {
        items: items.map((item) => ({
          product: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image,
        })),
        shippingAddress: address,
        paymentMethod: payment,
        totalPrice,
        shippingPrice: delivery === 'express' ? 99 : shippingPrice,
        taxPrice,
        coupon: coupon?.code || null,
      }
      const res = await api.post('/orders', orderData)
      dispatch(clearCart())
      toast.success('Order placed successfully! 🎉')
      navigate(`/order-success/${res.data._id}`)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to place order')
    } finally {
      setPlacing(false)
    }
  }

  if (items.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <>
      <Helmet>
        <title>Checkout — FreshKart</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-extrabold text-dark mb-8">Checkout</h1>

        {/* Step Indicator */}
        <div className="flex items-center mb-10">
          {STEPS.map((s, idx) => {
            const Icon = s.icon
            const active = step === s.id
            const done = step > s.id
            return (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    done ? 'bg-accent-500 text-white' : active ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {done ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <span className={`text-xs mt-1.5 font-semibold ${active ? 'text-primary-600' : done ? 'text-accent-500' : 'text-gray-400'}`}>
                    {s.label}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-all ${done ? 'bg-accent-500' : 'bg-gray-200'}`} />
                )}
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Step Content */}
          <div className="md:col-span-2 card p-6">
            {/* Step 1: Address */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="font-bold text-lg text-dark mb-4">Delivery Address</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-dark block mb-1">Full Name *</label>
                    <input name="fullName" value={address.fullName} onChange={handleAddressChange} required placeholder="John Doe" className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-dark block mb-1">Phone *</label>
                    <input name="phone" value={address.phone} onChange={handleAddressChange} required placeholder="9876543210" className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-dark block mb-1">Street Address *</label>
                  <textarea name="street" value={address.street} onChange={handleAddressChange} required placeholder="House/Flat No., Street, Area" rows={2} className="input-field resize-none" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-dark block mb-1">City *</label>
                    <input name="city" value={address.city} onChange={handleAddressChange} required placeholder="Mumbai" className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-dark block mb-1">State *</label>
                    <input name="state" value={address.state} onChange={handleAddressChange} required placeholder="Maharashtra" className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-dark block mb-1">PIN Code *</label>
                    <input name="zipCode" value={address.zipCode} onChange={handleAddressChange} required placeholder="400001" className="input-field" />
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (!address.fullName || !address.phone || !address.street || !address.city || !address.zipCode) {
                      return toast.error('Please fill all required fields')
                    }
                    setStep(2)
                  }}
                  className="btn-primary w-full mt-2"
                >
                  Continue to Delivery →
                </button>
              </div>
            )}

            {/* Step 2: Delivery */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="font-bold text-lg text-dark mb-4">Choose Delivery Method</h2>
                {[
                  { value: 'standard', label: 'Standard Delivery', sub: '3–5 business days', price: shippingPrice === 0 ? 'FREE' : '₹49' },
                  { value: 'express', label: 'Express Delivery', sub: '1–2 business days', price: '₹99' },
                ].map((opt) => (
                  <label key={opt.value} className={`flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition ${
                    delivery === opt.value ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery"
                        value={opt.value}
                        checked={delivery === opt.value}
                        onChange={(e) => setDelivery(e.target.value)}
                        className="text-primary-500"
                      />
                      <div>
                        <p className="font-semibold text-dark">{opt.label}</p>
                        <p className="text-xs text-gray-500">{opt.sub}</p>
                      </div>
                    </div>
                    <span className={`font-bold ${opt.price === 'FREE' ? 'text-accent-500' : 'text-dark'}`}>
                      {opt.price}
                    </span>
                  </label>
                ))}
                <div className="flex gap-3 mt-2">
                  <button onClick={() => setStep(1)} className="btn-outline w-1/3">← Back</button>
                  <button onClick={() => setStep(3)} className="btn-primary w-2/3">Continue to Payment →</button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="font-bold text-lg text-dark mb-4">Payment Method</h2>
                {[
                  { value: 'COD', label: 'Cash on Delivery', icon: '💵', sub: 'Pay when your order arrives' },
                  { value: 'UPI', label: 'UPI / QR Code', icon: '📱', sub: 'GPay, PhonePe, Paytm (Demo)' },
                  { value: 'Card', label: 'Credit / Debit Card', icon: '💳', sub: 'Visa, Mastercard, RuPay (Demo)' },
                ].map((opt) => (
                  <label key={opt.value} className={`flex items-center gap-4 p-4 border-2 rounded-2xl cursor-pointer transition ${
                    payment === opt.value ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value={opt.value}
                      checked={payment === opt.value}
                      onChange={(e) => setPayment(e.target.value)}
                      className="text-primary-500"
                    />
                    <span className="text-2xl">{opt.icon}</span>
                    <div>
                      <p className="font-semibold text-dark">{opt.label}</p>
                      <p className="text-xs text-gray-500">{opt.sub}</p>
                    </div>
                  </label>
                ))}
                <div className="flex gap-3 mt-2">
                  <button onClick={() => setStep(2)} className="btn-outline w-1/3">← Back</button>
                  <button onClick={() => setStep(4)} className="btn-primary w-2/3">Review Order →</button>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-5 animate-fade-in">
                <h2 className="font-bold text-lg text-dark mb-2">Review Your Order</h2>

                {/* Address Summary */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Delivering to</p>
                  <p className="font-semibold text-dark">{address.fullName}</p>
                  <p className="text-sm text-gray-600">{address.street}, {address.city}, {address.state} - {address.zipCode}</p>
                  <p className="text-sm text-gray-600">📞 {address.phone}</p>
                </div>

                {/* Items Summary */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                        onError={(e) => { e.target.src = FOOD_FALLBACK_SVG }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-dark line-clamp-1">{item.name}</p>
                        <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-bold text-dark">₹{(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  ))}
                </div>

                {/* Payment method */}
                <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center">
                  <p className="text-sm font-semibold text-dark">Payment: {payment}</p>
                  <p className="text-sm text-gray-500">{delivery === 'express' ? 'Express Delivery' : 'Standard Delivery'}</p>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(3)} className="btn-outline w-1/3">← Back</button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={placing}
                    className="btn-primary w-2/3 disabled:opacity-60"
                  >
                    {placing ? 'Placing Order…' : `Place Order · ₹${grandTotal.toFixed(0)}`}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="font-bold text-dark mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.length} items)</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className={shippingPrice === 0 ? 'text-accent-500 font-semibold' : ''}>
                    {shippingPrice === 0 ? 'FREE' : `₹${delivery === 'express' ? 99 : shippingPrice}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>₹{taxPrice.toFixed(2)}</span>
                </div>
                {coupon && (
                  <div className="flex justify-between text-accent-500 font-semibold">
                    <span>Coupon ({coupon.code})</span>
                    <span>-{coupon.discount}%</span>
                  </div>
                )}
                <div className="border-t pt-2 flex justify-between font-bold text-dark text-base">
                  <span>Total</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-accent-500/10 border border-accent-500/20 rounded-2xl p-4">
              <p className="text-xs font-semibold text-accent-600">🔒 100% Secure Checkout</p>
              <p className="text-xs text-gray-500 mt-1">Your payment information is never stored.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
