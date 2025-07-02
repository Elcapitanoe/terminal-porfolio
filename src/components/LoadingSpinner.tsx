import React from 'react'

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-terminal-green border-t-transparent"></div>
      <span className="ml-3 text-terminal-text">Loading terminal...</span>
    </div>
  )
}