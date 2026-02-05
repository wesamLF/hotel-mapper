import React from 'react'

const loading = () => {
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        {/* Loading text */}
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  )
}

export default loading