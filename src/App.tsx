import React, { Suspense } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary'
import { TerminalWindow } from './components/TerminalWindow'
import { LoadingSpinner } from './components/LoadingSpinner'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-terminal-bg flex items-center justify-center p-4">
        <Suspense fallback={<LoadingSpinner />}>
          <TerminalWindow />
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

export default App