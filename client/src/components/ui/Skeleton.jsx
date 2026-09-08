export const SkeletonCard = () => (
  <div className="card p-4 animate-pulse">
    <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
    <div className="h-10 bg-gray-200 rounded-xl"></div>
  </div>
)
export const SkeletonText = ({ width = 'w-full' }) => <div className={`h-4 bg-gray-200 rounded ${width} animate-pulse mb-2`}></div>
export const SkeletonImage = () => <div className="w-full h-full bg-gray-200 rounded-xl animate-pulse"></div>
