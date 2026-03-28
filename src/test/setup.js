import '@testing-library/jest-dom'

// Framer Motion uses IntersectionObserver as a constructor.
// Don't fire the callback synchronously — framer-motion reads the returned
// observer reference *after* construction, so a sync call causes "cannot
// access before initialization".  Tests only need the DOM to render.
global.IntersectionObserver = vi.fn().mockImplementation(function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }
})

global.ResizeObserver = vi.fn().mockImplementation(function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }
})
