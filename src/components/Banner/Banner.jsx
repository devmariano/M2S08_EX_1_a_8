import './Banner.css';
import propTypes from 'prop-types';


function Banner({texto}) {
    return ( 
        <div className='Banner'>
            <h3 className='description-wrapper'>{texto}</h3>
            <h1>Seu futuro você escolhe<span className='text-top'>.</span></h1>
        </div>
    );
}

//verifica o prop types
Banner.propTypes = {
    texto: propTypes.string.isRequired
}

export default Banner;