import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StatCounter from '../components/StatCounter'

describe('StatCounter', () => {
  it('renders the label', () => {
    render(<StatCounter value={5} suffix="+" label="Years Experience" />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })
})
