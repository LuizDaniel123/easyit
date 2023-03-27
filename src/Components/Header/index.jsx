import React from 'react'

import './style.css'

export default function Header() {
    return (

        <header className='header'>

            <h1 className='header_titulo'>EASYIT</h1>

            <nav className='nav'>
                <a className='nav_links' href='#'>Onde comprar</a>
                <a className='nav_links' href='#'>Para varejistas</a>
                <a className='nav_links' href='#'>Ajuda</a>
            </nav>

            <div className='buttons'>
                <button className='buttons_entrar'>ENTRAR</button>
                <button className='buttons_criar-conta'>CRIAR CONTA</button>
            </div>

        </header>

    );
}