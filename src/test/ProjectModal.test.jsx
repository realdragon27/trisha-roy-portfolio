import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'

describe('ProjectModal', () => {
  it('renders project title and closes on button click', () => {
    const onClose = vi.fn()
    render(<ProjectModal project={projects[0]} onClose={onClose} />)
    expect(screen.getByText('Operations Performance Dashboard')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('Close modal'))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
