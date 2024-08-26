



import React from 'react';

function ResetButton() {
    
    const restart = ()=>{
        window.location.reload();
       }
  return (
    <button className="btn btn-danger mt-4" onClick={restart} >
      Restart
    </button>
  );
}

export default ResetButton;
