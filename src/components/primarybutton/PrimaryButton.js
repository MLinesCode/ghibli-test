import React from 'react'
import './primarybutton.css'

const PrimaryButton = ({ onClick, buttonText, className }) => {
  return (
    <button
        className={ className }
        onClick={ onClick }
    >
      { buttonText }
    </button>
  )
}

export default PrimaryButton
