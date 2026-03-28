import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('renders CTA buttons and tagline', () => {
    render(<Hero />)
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('View Projects')).toBeInTheDocument()
    expect(screen.getByText(/Transforming operational data/i)).toBeInTheDocument()
  })
})
