export default function ProductFilters({ minPrice = '', maxPrice = '', onMinPrice, onMaxPrice, onClear }) {
  const handleMinPrice = (e) => onMinPrice?.(e.target.value)
  const handleMaxPrice = (e) => onMaxPrice?.(e.target.value)

  const hasFilters = minPrice || maxPrice

  return (
    <div className="w-full bg-white p-5 rounded-2xl shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-dark">Filters</h3>
        {hasFilters && (
          <button
            onClick={onClear}
            className="text-sm text-primary-500 font-semibold hover:text-primary-700"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-dark mb-3 text-sm">Price Range</h4>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
            <input
              type="number"
              value={minPrice}
              onChange={handleMinPrice}
              placeholder="Min"
              min={0}
              className="input-field pl-7 py-2 text-sm"
              aria-label="Minimum price"
            />
          </div>
          <span className="text-gray-400">–</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
            <input
              type="number"
              value={maxPrice}
              onChange={handleMaxPrice}
              placeholder="Max"
              min={0}
              className="input-field pl-7 py-2 text-sm"
              aria-label="Maximum price"
            />
          </div>
        </div>
        {/* Quick price shortcuts */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { label: 'Under ₹200', max: '200' },
            { label: '₹200–₹500', min: '200', max: '500' },
            { label: 'Above ₹500', min: '500' },
          ].map(({ label, min, max }) => (
            <button
              key={label}
              onClick={() => {
                onMinPrice?.(min || '')
                onMaxPrice?.(max || '')
              }}
              className="text-xs bg-gray-100 hover:bg-primary-50 hover:text-primary-600 text-gray-600 px-3 py-1.5 rounded-full transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="font-semibold text-dark mb-3 text-sm">Availability</h4>
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <input
            type="checkbox"
            className="w-4 h-4 rounded text-primary-500 focus:ring-primary-400"
          />
          <span className="text-sm text-gray-700 group-hover:text-dark">In Stock Only</span>
        </label>
      </div>

      {/* Rating Filter */}
      <div>
        <h4 className="font-semibold text-dark mb-3 text-sm">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2].map((r) => (
            <label key={r} className="flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="rating" value={r} className="text-primary-500 focus:ring-primary-400" />
              <span className="text-sm text-gray-700 group-hover:text-dark">
                {'★'.repeat(r)}{'☆'.repeat(5 - r)} & above
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
