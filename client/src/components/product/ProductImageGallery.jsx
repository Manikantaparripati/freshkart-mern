import { useState, useEffect } from 'react'

const FOOD_FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="none"><rect width="600" height="600" fill="%23FAFAF9"/><circle cx="300" cy="270" r="110" fill="%23FED7AA" fill-opacity="0.45"/><path d="M250 240 C250 200, 350 200, 350 240 C350 300, 250 300, 250 240 Z" fill="%23F97316"/><path d="M225 320 C265 350, 335 350, 375 320" stroke="%23EA580C" stroke-width="8" stroke-linecap="round"/><text x="300" y="430" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="%2378350F" text-anchor="middle">FreshKart Original</text></svg>`

export default function ProductImageGallery({ images = [], productName = 'Product' }) {
  const defaultPlaceholder = FOOD_FALLBACK_SVG
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
      <div className="aspect-square bg-stone-50 rounded-3xl overflow-hidden border border-stone-200/60 relative group shadow-inner">
        <img
          src={main}
          alt={productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            if (e.target.src !== defaultPlaceholder) {
              e.target.src = defaultPlaceholder
            }
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
