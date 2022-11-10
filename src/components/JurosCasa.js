



function JurosCasa({calcInterest, allInterest}) {
  return (
    <div>
        <h3>Valor total a pagar pelo imóvel será de:</h3>
      <h1>{(calcInterest).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>
      <h3>Valor total de juros a pagar pelo imóvel é igual a:</h3>
      <h1>{(allInterest).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>
    </div>
  )
}

export default JurosCasa