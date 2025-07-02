import React from 'react'
import type { WindowButtonProps } from '../types'

const buttonColors = {
  close: 'bg-terminal-red hover:bg-red-400',
  minimize: 'bg-terminal-yellow hover:bg-yellow-400',
  maximize: 'bg-terminal-green hover:bg-green-400'
}

export const WindowButton: React.FC<WindowButtonProps> = ({ type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full transition-colors duration-200 ${buttonColors[type]}`}
      aria-label={`${type} window`}
      type="button"
    />
  )
}