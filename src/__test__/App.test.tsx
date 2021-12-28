import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

// Firebase mock object
jest.mock('firebase/compat/app', () => ({
  initializeApp: () => ({
    firestore: () => ({
      collection: () => ({
        doc: () => ({
          onSnapshot: jest.fn().mockReturnThis(),
        }),
      }),
    }),
    auth: jest.fn(),
  }),
}))

describe('App has playground and blocks', () => {
  test('App contains #playground', () => {
    render(<App />)
    const playground = document.querySelector('#playground')
    expect(playground).toBeInTheDocument()
  })

  test('App contains 100 blocks', () => {
    render(<App />)
    const blocks = document.querySelectorAll('.block')
    expect(blocks.length).toBe(100)
  })
})
