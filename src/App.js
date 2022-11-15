
//components react
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//states
import {useState} from 'react';
//icons to cards
import casa from './icons/casa.png';
import carroNovo from './icons/carro-novo.png';
import money from './icons/money.png';
//components
import JurosCarro from './components/JurosCarro.js';
import JurosCasa from './components/JurosCasa.js';
import JurosInvest from './components/JurosInvest.js';

//header components
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
//placeholders 
const placeholder = ['digite o valor do capital', 'tempo para pagar', 'taxa de juros'];
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
//reset the values
  const resetValues = () =>{
    setValue('');
    setTime('');
    setInterest('');
    setCalcInterest(0);
  }
//btn from cards
    const showHouse = () => {
      setFormulary(true);
      setPage(stages[1].name);
      resetValues();
    };
    const showCar = () => {
      setFormulary(true);
      setPage(stages[2].name);
      resetValues();
    };
    const showMoney = () => {
      setFormulary(true);
      setPage(stages[3].name);
      resetValues();
    };


//function to validate values
    const calc = (e) => {
        e.preventDefault();

        let calculate = (Value * (1 + interest / 100) ** time)
        setCalcInterest(calculate);
       
        let totalInterest = (calculate - Value);

        setAllInterest(totalInterest);

        return;
    }
    //return to home
  const returnToHome = () => {
    setPage(stages[0].name);
    setFormulary(false);
    }

  return (
    <div className="App">
      
        <header>
          <Navbar bg="light" expand="lg">
              <Container fluid>
              <Navbar.Brand onClick={returnToHome}><h4 style={{cursor: 'pointer'}}>Página inicial</h4></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>

              <Nav.Link onClick={showCar}><p>juros sobre veículo</p></Nav.Link>
              <Nav.Link onClick={showMoney}> <p>juros sobre investimento</p></Nav.Link>
              <Nav.Link onClick={showHouse}> <p>juros sobre imóvel</p></Nav.Link>
            </Nav>
                 
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
      <main>
        {page === 'start' && <div >
          <article>
            <h1>Calculadora de juros compostos</h1>
            <h3>o que são juros compostos?</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo facilis harum magnam necessitatibus, nisi vero soluta corrupti atque aperiam dignissimos eaque dolore iusto ratione ad delectus architecto voluptate iure earum.</p>
            <h3>Para que saber quanto estou pagando de juros?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum veniam mollitia rem voluptas voluptatum asperiores excepturi dolore velit animi! Nesciunt obcaecati animi sint neque sequi, nihil suscipit? Vero, sit?</p>
              <p>Para começar, escolha uma das opções de investimento abaixo:</p>
          </article>
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
          <div className='results'>
          {page === 'car' && calcInterest > 0 &&(<JurosCarro calcInterest={calcInterest} allInterest={allInterest} />)}
          {page === 'house' && calcInterest > 0 && (<JurosCasa calcInterest={calcInterest} allInterest={allInterest} />)}
          {page === 'money' && calcInterest > 0 && (<JurosInvest calcInterest={calcInterest} allInterest={allInterest} />)}
        </div>
        {formulary === true &&  <form className='form ' onSubmit={calc}>
              {page === 'house' && <h1>Investimento imobiliário</h1>}
              {page === 'car' && <h1>Investimento em automóveis</h1>}
              {page === 'money' && <h1>Investimento Financeiro</h1>}
            <p>digite as informações abaixo:</p>
            <label>
              <h3>valor</h3>
              <input type="text" name="valor"  placeholder={placeholder[0]} onChange={(e) => setValue(e.target.value)} value={Value}/>
            </label>
            <label>
              <h3>tempo</h3>
              <input type="text" name="tempo" placeholder={placeholder[1]} onChange={(e) => setTime(e.target.value)} value={time}/>
            </label>
            <label>
              <h3>taxa de juros a.a</h3>
              <input type="text" name="juros" placeholder={placeholder[2]} onChange={(e) => setInterest(e.target.value)} value={interest}/>
            </label>
            <button className="btnForm" >calcular</button>
        </form>}

        
      </main>
    </div>
  );
}

export default App;
