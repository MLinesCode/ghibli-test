import React from 'react'
import './iconlite.css'

const IconLite = ({ iconSource }) => {
  return (
    <div className="iconlite__container">
      <img className="iconlite__img" src={ iconSource } alt={ iconSource } />
    </div>
  )
}

export default IconLite
