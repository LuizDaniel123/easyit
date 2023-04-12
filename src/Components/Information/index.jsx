import React from 'react'
import './styled.js'
import Mockup_main from '../../img/Mockup-main.svg'
import Button from '../Button'
import { ContainerButton } from '../Header/styled'
import { InformationContainer, Main, Title } from './styled.js'

export default function Information() {
  return (
    <Main>
        <InformationContainer>
            <Title>Parcele suas compras via pix sem cartão em até 4x sem juros.</Title>
              <ContainerButton>
                <Button classNameComponent='button-container_button' idComponent='button-container_entrar' content='QUERO PARCELAR'/>
                <Button classNameComponent='button-container_button' idComponent='button-container_criar-conta' content='MAS COMO?'/>
              </ContainerButton>
        </InformationContainer>
        <img id='mockup-main' src={Mockup_main} alt='imagem de pagamento de um produto pela easyit'></img>
    </Main>
  )
}
