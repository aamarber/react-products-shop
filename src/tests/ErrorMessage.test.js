import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

test('shows error message', async () => {
  // ARRANGE
  const message = "test showing error message"
  //ACT
  render(<ErrorMessage message={message} />)  

  // ASSERT
  expect(screen.getByText(message)).toBeTruthy();
})