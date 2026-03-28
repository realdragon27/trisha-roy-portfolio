import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CarouselPlaceholder from '../components/CarouselPlaceholder'

describe('CarouselPlaceholder', () => {
  it('renders slide label and navigation dots', () => {
    render(<CarouselPlaceholder />)
    expect(screen.getByText('Dashboard coming soon')).toBeInTheDocument()
    const dots = document.querySelectorAll('[data-testid="carousel-dot"]')
    expect(dots.length).toBe(5)
  })
})
