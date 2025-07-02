import React from 'react'
import { WindowButton } from './WindowButton'
import type { TerminalHeaderProps } from '../types'

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({ 
  title = "debian@server:~",
  onClose,
  onMinimize,
  onMaximize 
}) => {
  return (
    <div className="bg-terminal-header flex items-center px-3 py-2 border-b border-gray-700">
      <div className="flex gap-2">
        <WindowButton type="close" onClick={onClose} />
        <WindowButton type="minimize" onClick={onMinimize} />
        <WindowButton type="maximize" onClick={onMaximize} />
      </div>
      <div className="ml-4 text-terminal-gray text-sm font-medium">
        {title}
      </div>
    </div>
  )
}