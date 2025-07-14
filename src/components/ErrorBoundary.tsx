import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-terminal-bg flex items-center justify-center p-4">
          <div className="bg-terminal-window border border-terminal-red rounded-lg p-8 max-w-md w-full">
            <div className="text-terminal-red text-xl font-bold mb-4">
              System Error
            </div>
            <div className="text-terminal-text mb-4">
              Something went wrong. Please refresh the page.
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-terminal-red text-terminal-window px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
            >
              Reload Terminal
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}