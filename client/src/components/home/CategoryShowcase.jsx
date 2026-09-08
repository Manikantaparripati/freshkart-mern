import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../product/ProductCard"
import { SkeletonCard } from "../ui/Skeleton"
import { ArrowRight } from "lucide-react"
import { FALLBACK_PRODUCTS } from "../../data/fallbackData"
import api from "../../services/api"

export default function CategoryShowcase({ title, subtitle, categorySlug, icon, limit = 4 }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const getFallback = () =>
      FALLBACK_PRODUCTS.filter((p) => p.category?.slug === categorySlug).slice(0, limit)

    const fetchCategoryProducts = async () => {
      try {
        const catRes = await api.get("/categories/" + categorySlug)
        if (catRes.data?._id) {
          const res = await api.get("/products", {
            params: { category: catRes.data._id, limit }
          })
          if (isMounted) {
            if (Array.isArray(res.data?.products) && res.data.products.length > 0) {
              setProducts(res.data.products.slice(0, limit))
            } else {
              setProducts(getFallback())
            }
          }
        } else if (isMounted) {
          setProducts(getFallback())
        }
      } catch {
        if (isMounted) {
          setProducts(getFallback())
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchCategoryProducts()

    return () => {
      isMounted = false
    }
  }, [categorySlug, limit])

  const displayList = Array.isArray(products) && products.length > 0
    ? products
    : FALLBACK_PRODUCTS.filter((p) => p.category?.slug === categorySlug).slice(0, limit)

  if (!loading && displayList.length === 0) return null

  return (
    <section className="mb-14">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="section-heading flex items-center gap-2.5">
            {icon && <span className="text-2xl">{icon}</span>}
            {title}
          </h2>
          {subtitle && <p className="section-sub mb-0 text-stone-500">{subtitle}</p>}
        </div>
        <Link
          to={"/category/" + categorySlug}
          className="text-primary-600 hover:text-primary-700 font-semibold text-sm hover:underline flex items-center gap-1 group flex-shrink-0"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {loading
          ? [...Array(limit)].map((_, i) => <SkeletonCard key={i} />)
          : displayList.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
      </div>
    </section>
  )
}
