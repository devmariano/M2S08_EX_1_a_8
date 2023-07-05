import './HomePage.css'

import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

function HomePage() {

  return (
    <>
    <Header/>
    <Banner texto="Os melhores cursos DEV"/>
    <Main/>
   <Footer/>
    </>
  )
}

export default HomePage