import { Star } from 'lucide-react'

export default function RatingStars({ rating = 0, size = 'md', showCount = false, count = 0 }) {
  const sizeClass = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' }[size] || 'w-4 h-4'

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.floor(rating)
        const half = !filled && star - 0.5 <= rating
        return (
          <span key={star} className="relative inline-block">
            {/* Empty star base */}
            <Star className={`${sizeClass} text-gray-200 fill-gray-200`} />
            {/* Filled overlay */}
            {(filled || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: filled ? '100%' : '50%' }}
              >
                <Star className={`${sizeClass} text-secondary-500 fill-secondary-500`} />
              </span>
            )}
          </span>
        )
      })}
      {showCount && (
        <span className="text-xs text-gray-500 ml-1">({count})</span>
      )}
    </div>
  )
}
