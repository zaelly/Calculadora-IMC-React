import './Calculadora.css'
import { useState} from 'react'

import Buttons from './Buttons'

const Calculadora = ({ calcImc }) => {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

 const handleRestrict = (text)=>{
  return text.replace(/[^0-9,]/g, "");
 } 

  const clearForm= (event)=>{
    event.preventDefault()

    setHeight("");
    setWeight("");
  }

  const heightChange = (e) => {
    const updateDigits = handleRestrict(e.target.value);
    setHeight(updateDigits);
  }
  const weightChange = (e) => {
    const updateDigits = handleRestrict(e.target.value);
    setWeight(updateDigits);
  }

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
                onChange={(e)=> heightChange(e)}             
                value={height}
              />
            </div>
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                onChange={(e)=> weightChange(e)}             
                value={weight}
                placeholder="Exemplo 70,5"
              />
            </div>
          </div>
          <div className="action-control">
            <Buttons id="calc-btn" 
            text="Calcular" 
            action={(e) => calcImc(e, height, weight)}
            />
            <Buttons id="clear-btn" 
            text="Limpar" 
            action={clearForm}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Calculadora