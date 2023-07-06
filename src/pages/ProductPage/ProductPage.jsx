import './ProductPage.css'

import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext';
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

function ProductPage() {

  const { titulo, setTitulo, subTitulo, setSubtitulo } = useContext(BannerContext);

  useEffect(() => {
    setTitulo("Escolha o melhor para você");
    setSubtitulo("nossos produtos");
  }, [setTitulo, setSubtitulo]);

  return (
    <>
    <Header/>
    <Banner titulo={titulo} subTitulo={subTitulo} />
    Product Page is render
    <Footer/>
    </>
  )
}

export default ProductPage