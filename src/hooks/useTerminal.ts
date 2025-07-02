import { useState, useEffect } from 'react'
import type { TerminalCommand, TerminalState } from '../types'
import { getPersonalInfo } from '../utils/personalInfo'

export const useTerminal = (): TerminalState => {
  const [commands, setCommands] = useState<TerminalCommand[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const initializeTerminal = async () => {
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const personalInfo = getPersonalInfo()
      const whoamiOutput = Object.entries(personalInfo)
        .map(([key, value]) => `${key.padEnd(12)} : ${value}`)
        .join('\n')

      setCommands([
        {
          command: 'cat /usr/data/whoami.txt',
          output: whoamiOutput,
          timestamp: new Date()
        }
      ])
      
      setIsTyping(false)
    }

    initializeTerminal()
  }, [])

  return {
    commands,
    currentInput,
    isTyping
  }
}