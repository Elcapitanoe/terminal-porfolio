import React from 'react'
import { TerminalPrompt } from './TerminalPrompt'
import { TerminalOutput } from './TerminalOutput'
import { TerminalCursor } from './TerminalCursor'
import type { TerminalBodyProps } from '../types'

export const TerminalBody: React.FC<TerminalBodyProps> = ({
  commands,
  currentInput,
  isTyping
}) => {
  return (
    <div className="p-4 sm:p-6 text-terminal-text font-mono text-sm sm:text-base leading-relaxed min-h-[400px] max-h-[600px] overflow-y-auto">
      {commands.map((cmd, index) => (
        <div key={index} className="mb-2 animate-slide-up">
          <TerminalPrompt command={cmd.command} />
          <TerminalOutput output={cmd.output} />
        </div>
      ))}
      
      <div className="flex items-center">
        <TerminalPrompt command={currentInput} />
        <TerminalCursor isVisible={!isTyping} />
      </div>
    </div>
  )
}