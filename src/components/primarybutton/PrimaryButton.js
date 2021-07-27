import React from 'react'
import './primarybutton.css'

const PrimaryButton = ({ onClick, children, className }) => {
  return (
    <button
        className={ className }
        onClick={ onClick }
    >
      { children }
    </button>
  )
}

export default PrimaryButton
