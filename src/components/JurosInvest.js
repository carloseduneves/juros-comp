

function JurosInvest({calcInterest, allInterest}) {
  return (
    <div>
      <div className='boxRes'>
        <h3>O montante a receber será de:</h3>
        <h1>{(calcInterest).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>
      </div>
      <div className='boxRes'>
        <h3>Valor total de juros a receber:</h3>
        <h1>{(allInterest).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>
      </div>
    </div>
  )
}

export default JurosInvest