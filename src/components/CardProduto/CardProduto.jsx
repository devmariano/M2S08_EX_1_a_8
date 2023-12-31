import './CardProduto.css';
import PropTypes from 'prop-types';

function CardProduto(props) {
  const { foto, preço, nome, descricao, caracteristicas } = props;

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={foto} alt="Capa do curso" />
        <span>{preço}</span>
      </div>
      <div className="card-data">
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <div className="card-details">
          <div className="details">
            <ul>
              {caracteristicas.map((item, index) => {
                if (item) {
                  return <li key={index}>{item}</li>;
                }
              })}
            </ul>
          </div>
          <div className="details-button">
            <button type="button" className="btn-card">
              MAIS SOBRE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CardProduto.propTypes = {
  foto: PropTypes.string,
  preço: PropTypes.string,
  nome: PropTypes.string,
  descricao: PropTypes.string,
  caracteristicas: PropTypes.array,
};

export default CardProduto;