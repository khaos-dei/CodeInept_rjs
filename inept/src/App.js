import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';



import MonthProgressLine from './components/month_prog_line.js';
import AnaClock from './components/ana_clck.js';
import DigiClock from './components/digi_clck.js';
import DatePage from './components/date_page';
import TriageBubble from './components/triage_bbl';
import ThemeChoice from './components/theme_choice';
import ButtonsLine from './components/buttons';
import Notepad from './components/notepad';
import ZenGifs from './components/zen_gifs';

function App() {
  //window.localStorage.setItem('theme', JSON.stringify(themes.defa));

  const {theme, themeLoaded} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);




  const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 10000);//new state every 10 seconds, may lower for click fund 
    }, []);
  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
    <GlobalStyles/>
    <div className="App">
      <div className="App-body">
        <MonthProgressLine datentime={dateState} />
        <AnaClock datentime={dateState} />
        <DatePage datentime={dateState} />
        <TriageBubble  />
        <Notepad />
        <ThemeChoice datentime={dateState} />
        <DigiClock datentime={dateState} />
        <ButtonsLine />
        <ZenGifs />
        {/* <div className='nice-box' style={{ 'grid-area': '5/1/span 3/span 2' }}>Click Fund</div> */}
        <div className='nice-box' style={{ 'gridArea': '5/1/span 4/span 2' }}>Projects</div>
        {/* <div className='nice-box' style={{ 'gridArea': '8/3/span 1/span 1' }}>Zen Gif</div> */}
        <div className='nice-box' style={{ 'gridArea': '8/4/span 1/span 1' }}>Funsies (Spinwheel)</div>
        <div className='nice-box' style={{ 'gridArea': '7/5/span 2/span 1' }}>Youtube/Music</div>
      </div>
    </div>
    </ThemeProvider>
  }
  </>
  );
}

export default App;
