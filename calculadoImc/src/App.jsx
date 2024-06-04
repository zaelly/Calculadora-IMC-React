import { useState } from "react"
import {data} from './data/data'

import './App.css';
import Results from "./components/Results.jsx";
import Calculadora from "./components/Calculadora.jsx";

function App() {

  const handleBack = (e) => {
    e.preventDefault();

  };

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!height || !weight) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat /(heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div>
      {!imc ? (
        <Calculadora calcImc={calcImc}/>
      ) : ( 
        <Results handleBack={handleBack} data={data} imc={imc} info={info} infoClass={infoClass}/>
      )}
     </div>
  )
}

export default App
