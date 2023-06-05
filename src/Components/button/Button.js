import React from 'react';
import './Button.css';

function Button({clickHandler, children, disabled}) {

  return(
    <button
        type="button"
        className="nav-button"
        onClick={clickHandler}
        disabled={disabled}>
        {children}
    </button>
  );

}

export default Button;