import React from 'react'
import './styled.js'
import { 
  CardContainer, 
  CardContainerText, 
  CardContainerTitle, 
  ImgContainer, 
  ImgContainerImg 
} from './styled'

export default function CardInstallments({image, title, text}) {
  return (
    <CardContainer>
      <ImgContainer>
        <ImgContainerImg src={image}></ImgContainerImg>
      </ImgContainer>
      <CardContainerTitle>{title}</CardContainerTitle>
      <CardContainerText>{text}</CardContainerText>
    </CardContainer>
  )
}
