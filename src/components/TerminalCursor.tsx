import React from 'react'

interface TerminalCursorProps {
  isVisible: boolean
}

export const TerminalCursor: React.FC<TerminalCursorProps> = ({ isVisible }) => {
  return (
    <span 
      className={`inline-block w-2 h-5 bg-terminal-cursor ml-1 ${
        isVisible ? 'cursor-blink' : ''
      }`}
      aria-hidden="true"
    />
  )
}