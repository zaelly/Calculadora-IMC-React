
const Results = () => {
  return (
    <div id="result-container" className="hide">
        <p id="imc-number">Seu IMC: <span></span></p>
        <p id="imc-info">Situação atual: <span></span></p>
        <h3>Confira as classNameificações</h3>
        <div id="imc-table">
          <div className="table-header">
            <h4>IMC</h4>
            <h4>classNameificação</h4>
            <h4>Obesidade</h4>
          </div>
        </div>
        <button id="back-btn">Voltar</button>
      </div>
  )
}

export default Results