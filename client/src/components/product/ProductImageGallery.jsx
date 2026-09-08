import { useState, useEffect } from 'react'

export default function ProductImageGallery({ images = [], productName = 'Product' }) {
  const defaultPlaceholder = `https://placehold.co/600x600/F97316/white?text=${encodeURIComponent(
    productName.slice(0, 15)
  )}`
  const safeImages = images && images.length > 0 ? images : [defaultPlaceholder]
  const [main, setMain] = useState(safeImages[0])

  useEffect(() => {
    if (images && images.length > 0) {
      setMain(images[0])
    } else {
      setMain(defaultPlaceholder)
    }
  }, [images, productName])

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Image */}
      <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 relative group">
        <img
          src={main}
          alt={productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = defaultPlaceholder
          }}
        />
      </div>

      {/* Thumbnail Selector */}
      {safeImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {safeImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setMain(img)}
              className={`w-20 h-20 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                main === img
                  ? 'border-primary-500 ring-2 ring-primary-100 scale-95'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = defaultPlaceholder
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
