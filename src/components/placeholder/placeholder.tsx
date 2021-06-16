import React from 'react'
import './placeholder.css'

import placeholderImage from '../../assets/Placeholder/Academy-Weather-bg160.png'

function Placeholder () {
  return (
    <figure className="placeholder">
      <img className="placeholder__img" src={ placeholderImage } alt="Cloud" width="160" height="160" />
      <figcaption className="placeholder__caption">Fill in all the fields and the weather will be displayed</figcaption>
    </figure>
  )
}

export default Placeholder