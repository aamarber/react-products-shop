import React from 'react'

export default function ErrorMessage({message}) {
  return (
    <>
    <div id='errorMessage' className="modal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Error!</h5>
                <button type="button" data-bs-dismiss="modal" aria-label="Close">
                    <svg fill='black' viewBox='0 0 100 100' width='1em' height='1em'>
                        <line x1='0' x2='100' y1='0' y2='100' stroke='black'></line>
                        <line x1='0' x2='100' y1='100' y2='0' stroke='black'></line>
                    </svg>
                </button>
            </div>
            <div className="modal-body">
                <p>{message}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Accept</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
