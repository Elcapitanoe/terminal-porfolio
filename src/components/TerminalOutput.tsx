import React from 'react'

interface TerminalOutputProps {
  output: string | React.ReactNode
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ output }) => {
  if (!output) return null

  return (
    <div className="mt-1 text-terminal-text whitespace-pre-line">
      {output}
    </div>
  )
}