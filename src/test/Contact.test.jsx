import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from '../components/Contact'

describe('Contact', () => {
  it('renders email address and send button', () => {
    render(<Contact />)
    expect(screen.getByText('trishachitradip@gmail.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })
})
