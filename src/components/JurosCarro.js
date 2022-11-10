

function JurosCarro({calcInterest, allInterest}) {
    
  return (
    <div>
      <h3>Valor total a pagar pelo veículo:</h3>
      <h1>{(calcInterest).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>
      <h3>Valor total de juros a pagar:</h3>
      <h1>{(allInterest).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>
    </div>
  )
}

export default JurosCarro