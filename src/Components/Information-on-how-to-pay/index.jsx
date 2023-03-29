import React from 'react'
import './style.css'
import CardInstallments from '../Card-installments'
import Cart from '../../img/cart-information.svg'
import Screen from '../../img/screen-information.svg'
import Bag from '../../img/bag-information.svg'
import Positive from '../../img/positive-information.svg'

export default function InformationOnHowToPay({title, caption}) {
  return (
    <div className='content-container'>
        <h1 className='content-container_title'>{title}</h1>
        <p className='content-container_text'>{caption}</p>
        <div className='cards-container'>
            <CardInstallments image={Screen} title='Crie sua conta na EasyIt' text='É fácil e rápido. Apenas dados que você lembra de cabeça!'/>
            <CardInstallments image={Cart} title='Escolha uma loja parceira' text='Compre em uma loja parceira e gere uma chave Pix.'/>
            <CardInstallments image={Bag} title='Escolha quantas vezes quer parcelar' text='Mande-nos a chave pix gerada e a quantidade de parcelas.'/>
            <CardInstallments image={Positive} title='Após a aprovação, pague a entrada' text='Se aprovado, pague a entrada e pronto! é só esperar seu pedido'/>
        </div>
    </div>
  )
}
