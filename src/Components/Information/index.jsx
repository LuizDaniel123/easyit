import React from 'react'
import './style.css'
import Mockup_main from '../../img/Mockup-main.svg'
import Button from '../Button'

export default function Information() {
  return (

    <main id='main'>

        <div id='information'>

            <h1 id='information_titulo'>Parcele suas compras via pix sem cartão em até 4x sem juros.</h1>

            <div id='button-container-main'>

              <Button classNameComponent='button-container_button' content='QUERO PARCELAR'/>

              <Button classNameComponent='button-container_button' content='MAS COMO?'/>

            </div>


        </div>

        <img id='mockup-main' src={Mockup_main} alt='imagem de pagamento de um produto pela easyit'></img>

    </main>

  )
}
