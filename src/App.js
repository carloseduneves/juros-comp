
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import Header from './components/Header';
import casa from './icons/casa.png';
import carroNovo from './icons/carro-novo.png';
import money from './icons/money.png';
//import Spinner from 'react-bootstrap/Spinner';
//components
import JurosCarro from './components/JurosCarro.js';
import JurosCasa from './components/JurosCasa.js';
import JurosInvest from './components/JurosInvest.js';


function App() {
//control options pages
const stages = [
  {stage: 1, name: 'start'},
  {stage: 2, name: 'house'},
  {stage: 3, name: 'car'},
  {stage: 4, name: 'money'},
]
const [page, setPage] = useState(stages[0].name);
const [formulary, setFormulary] = useState(false);
//input values
  const [Value, setValue] = useState(0);
    const [time, setTime] = useState(0);
    const [interest, setInterest] = useState(0);
//values returned from function 
    const [ calcInterest, setCalcInterest] = useState(0);
    const [allInterest, setAllInterest] = useState(0);
//btn from cards
    const showHouse = () => {
      setFormulary(true);
      setPage(stages[1].name);
    };
    const showCar = () => {
      setFormulary(true);
      setPage(stages[2].name);
    };
    const showMoney = () => {
      setFormulary(true);
      setPage(stages[3].name);
    };


//function to validate values
    const calc = (e) => {
        e.preventDefault();

        let calculate = (Value * (1 + interest / 100) * time)
        setCalcInterest(calculate);
       
        let totalInterest = (calculate - Value);

        setAllInterest(totalInterest);
        console.log(allInterest);
        console.log(calculate);
        console.log(totalInterest);
        return;
    }

  return (
    <div className="App">
      <main>
        <header>
          <Header/>
        </header>
        <article>

        </article>
        {page === 'start' && <div >
            
             

            
            <p>Para começar, escolha uma das opções de investimento abaixo:</p>
            <div className='cards'>
              <div>
                <Card  className='Card'>
                    <Card.Img variant="top" src={casa} className='imgCard'/>
                  <Card.Body>
                    <Card.Title>Financiamento de casa</Card.Title>
                    <Card.Text>
                      Calcule quanto irá pagar de juros compostos no seu imóvel
                    </Card.Text>
                    <Button variant="primary" onClick={showHouse}>Fazer cálculo</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='Card'>
                    <Card.Img variant="top" src={carroNovo} className='imgCard2'/>
                  <Card.Body>
                    <Card.Title>Financiamento de automóvel</Card.Title>
                    <Card.Text>
                      Fique sabendo o quanto pagará de juros compostos adquirindo um autovóvel
                    </Card.Text>
                    <Button variant="primary" onClick={showCar}>Fazer cálculo</Button>
                  </Card.Body>
                </Card>
              </div>
               <div>
                 <Card  className='Card'>
                    <Card.Img variant="top" src={money} className='imgCard3'/>
                  <Card.Body>
                    <Card.Title>Aplicações financeiras</Card.Title>
                    <Card.Text>
                      Saiba o quanto o seu dinheiro vai render com juros compostos.
                    </Card.Text>
                    <Button variant="primary" onClick={showMoney}>Fazer cálculo</Button>
                  </Card.Body>
                             </Card>
               </div>
            </div>
          </div>}
        {formulary === true && <form className='form ' onSubmit={calc}>
        {page === 'house' && <h1>Investimento imobiliário</h1>}
              {page === 'car' && <h1>Investimento em automóveis</h1>}
              {page === 'money' && <h1>Investimento Financeiro</h1>}
            <p>digite as informações abaixo:</p>
            <input type="text" name="valor"  placeholder="valor do capital" onChange={(e) => setValue(e.target.value)}/>
            <input type="text" name="tempo" placeholder="tempo para pagar" onChange={(e) => setTime(e.target.value)}/>
            <input type="text" name="valor" placeholder="taxa de juros a.m." onChange={(e) => setInterest(e.target.value)}/>
            <button className="btnForm" >calcular</button>
            

        </form>}
        {page === 'car' && calcInterest > 0 &&(<JurosCarro calcInterest={calcInterest} allInterest={allInterest} />)}
        {page === 'house' && calcInterest > 0 && (<JurosCasa calcInterest={calcInterest} allInterest={allInterest} />)}
        {page === 'money' && calcInterest > 0 && (<JurosInvest calcInterest={calcInterest} allInterest={allInterest} />)}
       
      </main>
    </div>
  );
}

export default App;
