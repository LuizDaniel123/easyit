import React from 'react'

import './style.css'
import Button from '../Button';

export default function Header() {
    return (

        <header id='header'>

            <h1 id='header_titulo'>EASYIT</h1>

            <nav id='nav'>
                <a className='nav_links' href='#'>Onde comprar</a>
                <a className='nav_links' href='#'>Para varejistas</a>
                <a className='nav_links' href='#'>Ajuda</a>
            </nav>

            <div id='button-container-header'>
                <Button classNameComponent='button-container_class' idComponent='button-container_entrar' content='ENTRAR'/>
                <Button classNameComponent='button-container_class' idComponent='button-container_criar-conta' content='CRIAR CONTA'/>
            </div>

        </header>

    );
}