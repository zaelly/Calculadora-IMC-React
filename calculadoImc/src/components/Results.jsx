import Buttons from "./Buttons"
import './Results.css'

const Results = ({backButton, imc, info, infoClass, data}) => {
  return (
    <div id="result-container">
        <p id="imc-number">Seu IMC: <span className={infoClass}>{imc}</span></p>
        <p id="imc-info">Situação atual: <span className={infoClass}>{info}</span></p>
        <h3>Confira as classificações</h3>
        <div id="imc-table">
          <div className="table-header">
            <h4>IMC</h4>
            <h4>classificação</h4>
            <h4>Obesidade</h4>
          </div>

          {data.map((item) => (
            <div className="table-data" key={info}>
              <p>{item.classification}</p>
              <p>{item.info}</p>
              <p>{item.obesity}</p>
            </div>
            ))}

        </div>
       <Buttons id="back-btn" text="Voltar" action={backButton}/>
      </div>
  )
}

export default Results