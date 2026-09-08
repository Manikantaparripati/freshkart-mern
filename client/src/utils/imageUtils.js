export const FOOD_FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="%23FAFAF9"/><circle cx="200" cy="180" r="75" fill="%23FED7AA" fill-opacity="0.45"/><path d="M165 160 C165 130, 235 130, 235 160 C235 205, 165 205, 165 160 Z" fill="%23F97316"/><path d="M150 215 C175 235, 225 235, 250 215" stroke="%23EA580C" stroke-width="6" stroke-linecap="round"/><text x="200" y="295" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="%2378350F" text-anchor="middle">FreshKart</text></svg>`

export const getSafeImageUrl = (image) => {
  if (!image) return FOOD_FALLBACK_SVG
  if (typeof image === "string" && image.includes("placehold.co")) return FOOD_FALLBACK_SVG
  return image
}
