import React from 'react'
import logo from '../../assets/logo.png'
import './header.css'


function Header() {
    return ( 
        <nav className='menu-principal-wrapper'>
            <div className='logo-wrapper'>
            <a href="/"><img src={logo} alt="Logotipo" /></a>
            </div>
                <ul className='menu-wrapper'>
                    <li><a href="/products">Cursos</a></li>
                    <li><a href="/contacts">Contatos</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
        </nav>
    );
}

export default Header;