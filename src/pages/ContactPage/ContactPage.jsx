import './ContactPage.css'

import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext';
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'


function ContactPage() {

    const { titulo, setTitulo, subTitulo, setSubtitulo } = useContext(BannerContext);

    useEffect(() => {
      setTitulo("Entre em contato conosco");
      setSubtitulo("Contato");
    }, [setTitulo, setSubtitulo]);

  return (
    <>
    <Header/>
    <Banner titulo={titulo} subTitulo={subTitulo} />
    Contact page is render
    <Footer/>
    </>
  )
}

export default ContactPage