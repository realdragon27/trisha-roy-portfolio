import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../components/About'

describe('About', () => {
  it('renders section heading and professional bullets', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(/Process optimisation specialist/i)).toBeInTheDocument()
  })
})
