import React from 'react'
import './style.css'

export default function CardInstallments({image, title, text}) {
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img className='img-container_img' src={image}/>
      </div>
      <span className='card-container_title'>{title}</span>
      <p className='card-container_text'>{text}</p>
    </div>
  )
}
