import React from 'react'
import './styled.js'
import Button from '../Button';
import {
    Container,
    Logo,
    Navigation,
    Link,
    ContainerButton
} from "./styled.js"

export default function Header() {
    return (
        <Container>
            <Logo>EASYIT</Logo>
            <Navigation>
                <Link href='#'>Onde comprar</Link>
                <Link href='#'>Para varejistas</Link>
                <Link href='#'>Ajuda</Link>
            </Navigation>
            <ContainerButton>
                <Button classNameComponent='button-container_class' idComponent='button-container_entrar' content='ENTRAR'/>
                <Button classNameComponent='button-container_class' idComponent='button-container_criar-conta' content='CRIAR CONTA'/>
            </ContainerButton>
        </Container>
    );
}