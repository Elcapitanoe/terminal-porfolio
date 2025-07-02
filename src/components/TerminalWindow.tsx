import React from 'react'
import { TerminalHeader } from './TerminalHeader'
import { TerminalBody } from './TerminalBody'
import { useTerminal } from '../hooks/useTerminal'

export const TerminalWindow: React.FC = () => {
  const { commands, currentInput, isTyping } = useTerminal()

  return (
    <div className="w-full max-w-4xl mx-auto bg-terminal-window rounded-lg terminal-shadow overflow-hidden animate-fade-in">
      <TerminalHeader title="debian@server:~" />
      <TerminalBody 
        commands={commands}
        currentInput={currentInput}
        isTyping={isTyping}
      />
    </div>
  )
}