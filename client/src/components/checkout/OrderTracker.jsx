import { 
  ShoppingBag, 
  CheckCircle2, 
  Package, 
  Truck, 
  Compass, 
  Home, 
  XCircle 
} from 'lucide-react'

const STAGES = [
  { id: 'Order Placed', label: 'Order Placed', icon: ShoppingBag, desc: 'Received & logged' },
  { id: 'Confirmed', label: 'Confirmed', icon: CheckCircle2, desc: 'Verified by kitchen' },
  { id: 'Processing', label: 'Processing', icon: Package, desc: 'Packed with care' },
  { id: 'Shipped', label: 'Shipped', icon: Truck, desc: 'In transit with courier' },
  { id: 'Out for delivery', label: 'Out for Delivery', icon: Compass, desc: 'Arriving today' },
  { id: 'Delivered', label: 'Delivered', icon: Home, desc: 'Enjoy your food!' },
]

export default function OrderTracker({ currentStatus, trackingHistory = [] }) {
  if (currentStatus === 'Cancelled') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
        <XCircle className="w-12 h-12 text-red-500 mx-auto mb-2" />
        <h3 className="font-bold text-lg text-red-700">Order Cancelled</h3>
        <p className="text-xs text-red-600 mt-1">This order was cancelled.</p>
      </div>
    )
  }

  // Find index of current status
  const currentIndex = STAGES.findIndex(
    (s) => s.id.toLowerCase() === (currentStatus || '').toLowerCase()
  )
  const activeIdx = currentIndex >= 0 ? currentIndex : 0

  return (
    <div className="w-full py-4">
      {/* Desktop / Tablet Horizontal Stepper */}
      <div className="hidden sm:flex items-center justify-between relative">
        {/* Background Connecting Line */}
        <div className="absolute left-6 right-6 top-6 h-1 bg-gray-200 -z-0">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700"
            style={{ width: `${(activeIdx / (STAGES.length - 1)) * 100}%` }}
          />
        </div>

        {STAGES.map((stage, idx) => {
          const Icon = stage.icon
          const isDone = idx < activeIdx
          const isCurrent = idx === activeIdx
          const historyItem = trackingHistory.find(
            (h) => h.status?.toLowerCase() === stage.id.toLowerCase()
          )

          return (
            <div key={stage.id} className="relative z-10 flex flex-col items-center text-center px-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDone
                    ? 'bg-accent-500 text-white shadow-md shadow-accent-200'
                    : isCurrent
                    ? 'bg-primary-500 text-white ring-4 ring-orange-200 shadow-md shadow-primary-200 animate-pulse'
                    : 'bg-white border-2 border-gray-300 text-gray-400'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <p
                className={`text-xs mt-3 font-bold ${
                  isCurrent
                    ? 'text-primary-600'
                    : isDone
                    ? 'text-accent-600'
                    : 'text-gray-400'
                }`}
              >
                {stage.label}
              </p>
              <p className="text-[10px] text-gray-400 max-w-[80px] hidden md:block">
                {stage.desc}
              </p>
              {historyItem && (
                <p className="text-[9px] text-gray-400 mt-0.5">
                  {new Date(historyItem.date).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile Vertical Stepper */}
      <div className="sm:hidden space-y-6 relative pl-6 border-l-2 border-gray-200 ml-4">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon
          const isDone = idx < activeIdx
          const isCurrent = idx === activeIdx
          const historyItem = trackingHistory.find(
            (h) => h.status?.toLowerCase() === stage.id.toLowerCase()
          )

          return (
            <div key={stage.id} className="relative flex items-start gap-4">
              <div
                className={`absolute -left-[37px] top-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDone
                    ? 'bg-accent-500 text-white'
                    : isCurrent
                    ? 'bg-primary-500 text-white ring-4 ring-orange-100'
                    : 'bg-white border-2 border-gray-300 text-gray-400'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-sm font-bold ${isCurrent ? 'text-primary-600' : isDone ? 'text-dark' : 'text-gray-400'}`}>
                  {stage.label}
                </p>
                <p className="text-xs text-gray-500">{stage.desc}</p>
                {historyItem && (
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {new Date(historyItem.date).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} • {new Date(historyItem.date).toLocaleDateString('en-IN')}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
