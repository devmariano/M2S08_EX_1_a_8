import './NotFoundPage.css'

import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext';
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

function NotFoundPage() {

  const { titulo, setTitulo, subTitulo, setSubtitulo } = useContext(BannerContext);

  useEffect(() => {
    setTitulo("Vixi não encontramos essa página");
    setSubtitulo("Opsssss!");
  }, [setTitulo, setSubtitulo]);

  return (
    <>
    <Header/>
    <Banner titulo={titulo} subTitulo={subTitulo} />
    NotFoundPage is render 404
    <Footer/>
    </>
  )
}

export default NotFoundPage