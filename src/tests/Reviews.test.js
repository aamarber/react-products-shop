import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Reviews from '../Reviews/Reviews'

test('shows error message', async () => {
  // ARRANGE
  const reviews = [
    {author: 'author1', title: 'title1', description: 'description1', score: 5},
    {author: 'author2', title: 'title2', description: 'description2', score: 4},
    {author: 'author3', title: 'title3', description: 'description3', score: 3},
  ]

  //ACT
  render(<Reviews reviews={reviews} />)  

  // ASSERT
  expect(screen.getByText(reviews[1].description)).toBeTruthy();
  expect(screen.getByText(reviews[2].description)).toBeTruthy();
})