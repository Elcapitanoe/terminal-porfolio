import React from 'react'

interface TerminalPromptProps {
  command: string
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({ command }) => {
  return (
    <div className="flex items-center">
      <span className="text-terminal-green mr-2">debian@server:~$</span>
      <span className="text-terminal-text">{command}</span>
    </div>
  )
}