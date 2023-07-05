import React, { useState } from 'react';
import './FormContato.css';

function FormContato() {
  const [count, setCount] = useState(0);

  const handleInputCount = (event) => {
    setCount(event.target.value.length);
  };

  return (
    <form className="container mt-5">
      <h3>Deixe o seu recado</h3>
      <div className="row mb-4">
        <div className="col">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" name="nome" id="nome" className="form-control" placeholder="Digite seu nome..."/>
        </div>
        <div className="col">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input  type="text"  name="telefone" id="telefone" className="form-control" placeholder="Digite seu telefone..."/>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label">E-mail</label>
        <input type="email" name="email" id="email" className="form-control" placeholder="Digite seu email..."  />
      </div>
      <div className="mb-4">
        <label htmlFor="mensagem" className="form-label">Mensagem</label>
        <textarea name="mensagem" id="mensagem" className="form-control" placeholder="Digite sua mensagem..."
          onChange={handleInputCount}
          maxLength={500}></textarea>
      </div>
      <div className="d-flex flex-column mb-3">
        <p className="align-self-end">{`${count} de 500 caracteres`}</p>
        <button type="submit" className="btn btn-warning align-self-end">Enviar</button>
      </div>
    </form>
  );
}

export default FormContato;