import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders name and CV download link', () => {
    render(<Navbar />)
    expect(screen.getByText('Trisha Roy')).toBeInTheDocument()
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })
})
