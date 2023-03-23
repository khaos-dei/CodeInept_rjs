import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AnaClock from './components/ana_clck.js';
import DigiClock from './components/digi_clck.js';



function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div className='nice-box' style={{ 'grid-column-start': 'span 5'}}>Month</div>
        <div className='nice-box' style={{'grid-area': '2/1/span 2/span 1'}}><AnaClock /></div>
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
      </body>
    </div>
  );
}

export default App;
