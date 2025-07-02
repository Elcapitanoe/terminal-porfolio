import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TerminalWindow } from '../../components/TerminalWindow'

describe('TerminalWindow', () => {
  it('renders terminal header and body', () => {
    render(<TerminalWindow />)
    
    expect(screen.getByText('debian@server:~')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'close window' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'minimize window' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'maximize window' })).toBeInTheDocument()
  })
})