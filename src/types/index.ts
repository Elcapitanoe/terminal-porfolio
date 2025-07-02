export interface PersonalInfo {
  name: string
  nationality: string
  gender: string
  address: string
  email: string
  hobby: string
}

export interface TerminalCommand {
  command: string
  output: string | React.ReactNode
  timestamp?: Date
}

export interface TerminalState {
  commands: TerminalCommand[]
  currentInput: string
  isTyping: boolean
}

export interface WindowButtonProps {
  type: 'close' | 'minimize' | 'maximize'
  onClick?: () => void
}

export interface TerminalHeaderProps {
  title?: string
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}

export interface TerminalBodyProps {
  commands: TerminalCommand[]
  currentInput: string
  isTyping: boolean
}