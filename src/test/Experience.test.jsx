import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Experience from '../components/Experience'

describe('Experience', () => {
  it('renders Verra Mobility entry', () => {
    render(<Experience />)
    expect(screen.getByText('Verra Mobility UK')).toBeInTheDocument()
    expect(screen.getByText('2022 – Present')).toBeInTheDocument()
  })
})
