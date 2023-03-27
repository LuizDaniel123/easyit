import React from 'react'

import './style.css'

export default function Header() {
    return (

        <header id='header'>

            <h1 id='header_titulo'>EASYIT</h1>

            <nav id='nav'>
                <a className='nav_links' href='#'>Onde comprar</a>
                <a className='nav_links' href='#'>Para varejistas</a>
                <a className='nav_links' href='#'>Ajuda</a>
            </nav>

            <div id='button-container'>
                <button id='button-container_entrar'>ENTRAR</button>
                <button id='button-container_criar-conta'>CRIAR CONTA</button>
            </div>

        </header>

    );
}