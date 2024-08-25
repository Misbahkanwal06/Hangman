

// Modal Component
import React from 'react';
import ResetButton from './ResetButton';

function Modal({ show, message }) {
  if (!show) return null;
  return (
    <div className="modal d-flex justify-content-center align-items-center" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content text-center">
          <div className="modal-body">
            <h1>{message}</h1>
          </div>
          <ResetButton />
        </div>
      </div>
    </div>
  );
}

export default Modal;