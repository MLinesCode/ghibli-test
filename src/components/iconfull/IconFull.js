import React from 'react'
import './iconfull.css'

const IconFull = ({ icon, iconText }) => {
  return (
    <div className="icon__container" >
      <img className="icon__img" src={ icon } alt={ icon } />
      <p>{ iconText }</p>
    </div>
  )
}

export default IconFull
