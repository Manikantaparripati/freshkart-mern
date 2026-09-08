import { useState } from 'react'
import { Star } from 'lucide-react'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import api from '../../services/api'

export default function ReviewForm({ productId, onReviewAdded }) {
  const { isAuthenticated } = useSelector((s) => s.auth)
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isAuthenticated) {
    return (
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 text-center">
        <p className="text-gray-700 font-medium">Please <a href="/login" className="text-primary-600 font-bold hover:underline">login</a> to write a review.</p>
      </div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (rating === 0) return toast.error('Please select a star rating')
    if (comment.trim().length < 10) return toast.error('Comment must be at least 10 characters')

    setLoading(true)
    try {
      const res = await api.post(`/reviews/${productId}`, { rating, comment })
      toast.success('Review submitted!')
      setRating(0)
      setComment('')
      onReviewAdded?.(res.data)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to submit review')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-5 space-y-4">
      <h3 className="font-bold text-dark">Write a Review</h3>

      {/* Star Selector */}
      <div>
        <label className="text-sm text-gray-600 block mb-2">Your Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              aria-label={`Rate ${star} stars`}
            >
              <Star
                className={`w-7 h-7 transition-colors ${
                  star <= (hovered || rating)
                    ? 'fill-secondary-500 text-secondary-500'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div>
        <label className="text-sm text-gray-600 block mb-2">Your Review</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="Share your experience with this product..."
          className="input-field resize-none"
          minLength={10}
          maxLength={500}
        />
        <p className="text-xs text-gray-400 text-right mt-1">{comment.length}/500</p>
      </div>

      <button
        type="submit"
        disabled={loading || rating === 0}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting…' : 'Submit Review'}
      </button>
    </form>
  )
}
