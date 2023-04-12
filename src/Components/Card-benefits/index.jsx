import React from 'react'
import './styled.js'
import { 
    CardContainerBenefits, 
    CardContainerTextBenefits, 
    CardContainerTitleBenefits, 
    ImgContainerImgBenefits 
} from './styled.js'

export default function CardBenefits({image, title, text}) {
  return (
    <CardContainerBenefits>
      <ImgContainerImgBenefits src={image}></ImgContainerImgBenefits>
      <CardContainerTitleBenefits>{title}</CardContainerTitleBenefits>
      <CardContainerTextBenefits>{text}</CardContainerTextBenefits>
    </CardContainerBenefits>
  )
}
