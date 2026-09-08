import { Link } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="text-6xl mb-6">🤷‍♂️</div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  )
}
