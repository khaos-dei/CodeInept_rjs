import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import './App.css';
import DigiClock from './components/digi-clck.js';



function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
       Calendar Line
      </header>*/}
      <body className="App-body">
        <div className='nice-box' style={{ 'grid-column-start': 'span 5'}}>Month</div>
        <div className='nice-box' style={{'grid-area': '2/1/span 2/span 1'}}>Clock</div>
        <div className='nice-box' style={{'grid-area':'2/2/span 2/span 1' }}>Calendar</div>
        <div className='nice-box' style={{'grid-column-start': 'span 2'}}>Triage</div>
        <div className='nice-box' style={{ 'grid-area': '2/5/span 4/span 1' }}>Notepad</div>
        <div className='nice-box' style={{ 'grid-area': '3/3/span 5/span 2' }}>EMPTY</div>
        <div className='nice-box' style={{}}><DigiClock /></div>
        <div className='nice-box' style={{}}>Buttons</div>
        <div className='nice-box' style={{ 'grid-area': '5/1/span 3/span 2' }}>Click Fund</div>
        <div className='nice-box' style={{}}>Zen Gif</div>
        <div className='nice-box' style={{}}>Music</div>
        <div className='nice-box' style={{ 'grid-column-start': 'span 2' }}>Projects</div>
        <div className='nice-box' style={{}}>Icons</div>
        <div className='nice-box' style={{}}>Spinwheel</div>
        <div className='nice-box' style={{}}>Youtube</div>
        {/*
        <Container>
          <Row>
            <Col>
              <Row>
                <Col><div className='meow' style={{ height: 180, width: 180 }}>Clock</div></Col>
                <Col><div className='meow' style={{ height: 180, width: 140 }}>Date</div></Col>
              </Row>
              <Row>
                <Col><div className='meow' style={{ height: 100, width: 180 }}>Digital Clock</div></Col>
                <Col><div className='meow' style={{ height: 70, width: 50 }}>But</div></Col>
                <Col><div className='meow' style={{ height: 70, width: 50 }}>But</div></Col>
              </Row>
              <Row>
                <Col><div className='meow' style={{ height: 300, width: 250 }}>Click Fund</div></Col>
              </Row>
            </Col>
            <Col><div className='meow' style={{ height: 150, width: 300 }}>Triage</div></Col>
            <Col>
              <Row><Col><div className='meow' style={{ height: 350, width: 300 }}>Notepad</div></Col> </Row>
              <Row><Col><div className='meow' style={{ height: 150, width: 150 }}>Zen Gif</div></Col> </Row>
              <Row><Col><div className='meow' style={{ height: 100, width: 300 }}>Music</div></Col> </Row>
            </Col>
          </Row>
          <Row>
            <Col>Projects</Col>
            <Col>Icons</Col>
            <Col>Spinwheel</Col>
            <Col>Youtube</Col>
          </Row>
        </Container>
  */}
      </body>
    </div>
  );
}

export default App;
