import './Calculadora.css'
// import { useState} from 'react'
import Buttons from './Buttons'

const calculadora = () => {

  return (
    <div className="container">
      <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
          <div className="form-inputs">
            <div className="form-control">
              <label htmlFor="height">Altura:</label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder="Exemplo 1,75"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="Exemplo 70,5"
              />
            </div>
          </div>
          <div className="action-control">
            <Buttons id="calc-btn" text="Calcular"/>
            <Buttons id="clear-btn" text="Limpar"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default calculadora