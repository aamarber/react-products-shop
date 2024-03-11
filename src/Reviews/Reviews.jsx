import React from 'react'

export default function Reviews({reviews}) {
    const buildStars = (score) => {
        let result = [];
        for(let i = 0; i < score; i++) {
            result.push(<span>★</span>);
        }

        return result;
    };
  return (
    <table>
        <thead>
            <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Description</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {reviews?.map((review, index) => 
                    <tr key={`review-${index}`}>
                        <td>
                            <span>{review.author}</span>
                        </td>
                        <td>
                            <span>{review.title}</span>
                        </td>
                        <td>
                            <span>{review.description}</span>
                        </td>
                        <td>
                            {buildStars(review.score).map((star, index) => <span key={`star-${index}`}>{star}</span>)}
                        </td>
                    </tr>
            )}
        </tbody>
    </table>
  )
}
