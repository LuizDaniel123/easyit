import React from 'react'
import './style.css'

export default function Button({content, idComponent, classNameComponent}) {
  return (
    <button className={classNameComponent} id={idComponent}>{content}</button>
  )
}
