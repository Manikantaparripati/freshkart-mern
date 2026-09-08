export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className="px-3 py-1 rounded-md border disabled:opacity-50">Prev</button>
      {[...Array(totalPages)].map((_, i) => (
        <button key={i} onClick={() => onPageChange(i + 1)} className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? 'bg-primary-500 text-white' : 'border'}`}>
          {i + 1}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} className="px-3 py-1 rounded-md border disabled:opacity-50">Next</button>
    </div>
  )
}
