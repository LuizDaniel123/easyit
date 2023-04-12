import React from 'react'
import Container from './styled.js'

export default function Button({content, idComponent, classNameComponent}) {
  return (

    <Container>
      <button id={idComponent} className={classNameComponent}>{content}</button>
    </Container>
  )
}
