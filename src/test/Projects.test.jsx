import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Projects from '../components/Projects'

describe('Projects', () => {
  it('renders all 4 project card titles', () => {
    render(<Projects />)
    expect(screen.getByText('Operations Performance Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Process Improvement Tracker')).toBeInTheDocument()
    expect(screen.getByText('SLA Reporting Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Data Quality Analysis')).toBeInTheDocument()
  })
})
