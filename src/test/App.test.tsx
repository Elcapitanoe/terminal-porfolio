import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders terminal window', () => {
    render(<App />)
    expect(screen.getByText('debian@server:~')).toBeInTheDocument()
  })

  it('displays personal information', async () => {
    render(<App />)
    
    // Wait for the terminal to load
    expect(await screen.findByText(/Domi Adiwijaya/)).toBeInTheDocument()
    expect(screen.getByText(/Indonesia/)).toBeInTheDocument()
    expect(screen.getByText(/hello@domiadi.com/)).toBeInTheDocument()
  })
})