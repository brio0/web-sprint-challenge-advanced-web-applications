// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'

test('testing that spinner text renders', async () => {
  const { rerender } = render(<Spinner on={true} />)
  expect(screen.queryByText('Please wait...')).toBeInTheDocument()

})
