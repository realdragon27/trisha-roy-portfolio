import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from '../components/Skills'

describe('Skills', () => {
  it('renders both tab labels', () => {
    render(<Skills />)
    expect(screen.getByText('Operations & Process')).toBeInTheDocument()
    expect(screen.getByText('Data & BI Tools')).toBeInTheDocument()
  })
})
