import { BadgeCheck } from 'lucide-react'
import RatingStars from './RatingStars'

export default function ReviewCard({ review }) {
  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })

  const initials = review.user?.name
    ? review.user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U'

  return (
    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm flex-shrink-0">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-dark text-sm">{review.user?.name || 'Customer'}</p>
            <p className="text-xs text-gray-400">{formatDate(review.createdAt)}</p>
          </div>
        </div>
        <RatingStars rating={review.rating} size="sm" />
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mt-3">{review.comment}</p>

      {review.isVerifiedPurchase && (
        <div className="flex items-center gap-1 mt-3 text-accent-500 text-xs font-semibold">
          <BadgeCheck className="w-3.5 h-3.5" />
          Verified Purchase
        </div>
      )}
    </div>
  )
}
