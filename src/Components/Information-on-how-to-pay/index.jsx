import React from 'react'
import './styled.js'
import CardInstallments from '../Card-installments'
import Cart from '../../img/cart-information.svg'
import Screen from '../../img/screen-information.svg'
import Bag from '../../img/bag-information.svg'
import Positive from '../../img/positive-information.svg'
import Coin from '../../img/coin.svg'
import Card from '../../img/card.svg'
import Calendar from '../../img/calendar.svg'
import Percentage from '../../img/percentage-cart.svg'
import CardBenefits from '../Card-benefits/index.jsx'
import { 
  ContainerCards, 
  ContainerContent, 
  ContainerContentText, 
  ContainerContentTitle 
} from './styled.js'

export default function InformationOnHowToPay({title, caption, location}) {
  const stylesObj = {
    background: "#fff",
    border: "2px solid black"
}
  return (
    <ContainerContent style={{backgroundColor: location === 'Benefits' ? stylesObj.background : "#f2f2f2"}}>
        <ContainerContentTitle>{title}</ContainerContentTitle>
        <ContainerContentText>{caption}</ContainerContentText>
        <ContainerCards>
          {
            location === 'Installments' ? (
              <>
                <CardInstallments image={Screen} title='Crie sua conta na EasyIt' text='É fácil e rápido. Apenas dados que você lembra de cabeça!'/>
                <CardInstallments image={Cart} title='Escolha uma loja parceira' text='Compre em uma loja parceira e gere uma chave Pix.'/>
                <CardInstallments image={Bag} title='Escolha quantas vezes quer parcelar' text='Mande-nos a chave pix gerada e a quantidade de parcelas.'/>
                <CardInstallments image={Positive} title='Após a aprovação, pague a entrada' text='Se aprovado, pague a entrada e pronto! é só esperar seu pedido'/>
              </>
            ) : (
              <>
                <CardBenefits image={Coin} title='Controle dos seus pagamentos' text='Tenha controle das suas preferências pix a hora que quiser.'></CardBenefits>
                <CardBenefits image={Card} title='Sem necessidade de cartão de crédito' text='Se livre das altas taxas e anuidades dos cartões de crédito.'></CardBenefits>
                <CardBenefits image={Calendar} title='Lembre-se do vencimento' text='A cada vencimento mandaremos um lembrete via e-mail e/ou WhatsApp.'></CardBenefits>
                <CardBenefits image={Percentage} title='Você escolhe as parcelas' text='Na Easyit você parcelas compras de 150 a 10.000 reais e em até 12x.'></CardBenefits>
              </>
            )

          }
        </ContainerCards>
    </ContainerContent>
  )
}
