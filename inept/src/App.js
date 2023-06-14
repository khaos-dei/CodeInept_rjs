import React, { useEffect, useState } from 'react'
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
import Media from './components/media';
import Projects from './components/projects';
import LowerLine from './components/lower_line';

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
    <div className="App">
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
    <GlobalStyles/>
      <div className="App-body">
        <MonthProgressLine datentime={dateState} />
        <AnaClock datentime={dateState} />
        <DatePage datentime={dateState} />
        <TriageBubble  />
        <Notepad />
        <ThemeChoice datentime={dateState} />
        <DigiClock datentime={dateState} />
        <ButtonsLine />
        <Media />
        <Projects />
        <LowerLine />
        {/* <div className='nice-box' style={{ 'gridArea': '5/1/span 4/span 2' }}>Projects</div> */}
        {/* <div className='nice-box' style={{ 'gridArea': '8/4/span 1/span 1' }}>Funsies (Spinwheel)</div> */}
      </div>
    </ThemeProvider>
  }
    </div>
  );
}

export default App;
