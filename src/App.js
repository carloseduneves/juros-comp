
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
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  //return to home
  const returnToHome = () => {
    setPage(stages[0].name);
    setFormulary(false);
    }

  return (
    <div className="App">
      <main>
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

              <Nav.Link onClick={returnToHome}>Home</Nav.Link>
              <Nav.Link onClick={showHouse}>Calcurar juros sobre imóvel</Nav.Link>

              
                  <Nav.Link href="#" disabled>
                      Link
                  </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"/>
                      <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
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
            <input type="text" name="valor"  placeholder="valor do capital" onChange={(e) => setValue(e.target.value)}/>
            <input type="text" name="tempo" placeholder="tempo para pagar" onChange={(e) => setTime(e.target.value)}/>
            <input type="text" name="valor" placeholder="taxa de juros a.m." onChange={(e) => setInterest(e.target.value)}/>
            <button className="btnForm" >calcular</button>
        </form>}

        
      </main>
    </div>
  );
}

export default App;
