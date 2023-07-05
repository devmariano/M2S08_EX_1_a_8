import React from 'react'
import logo from '../../assets/logo.png'
import './header.css'


function Header() {
    return ( 
        <nav className='menu-principal-wrapper'>
            <div className='logo-wrapper'>
                <img src={logo} alt="Logotipo" />
            </div>
                <ul className='menu-wrapper'>
                    <li><a href="/cursos">Cursos</a></li>
                    <li><a href="/contatos">Contatos</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
        </nav>
    );
}

export default Header;