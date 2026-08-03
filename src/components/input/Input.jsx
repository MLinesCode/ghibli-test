import React from 'react'
import './input.css'

const Input = ({ type, autoComplete, placeholder }) => {
  return (
    <input
      className="input"
        type={ type }
        autoComplete={ autoComplete }
        placeholder={ placeholder }
    >
      {  }
    </input>
  )
}

export default Input
