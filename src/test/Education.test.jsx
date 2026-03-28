import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Education from '../components/Education'

describe('Education', () => {
  it('renders Education heading and Certifications heading', () => {
    render(<Education />)
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Certifications')).toBeInTheDocument()
  })
})
