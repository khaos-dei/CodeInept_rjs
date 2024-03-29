import React, { useEffect, useState } from 'react'
import './App.css';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from 'theme/GlobalStyles';
import { useTheme } from 'theme/useTheme';

import MonthProgressLine from 'components/top_line.js';
import AnaClock from 'components/ana_clck.js';
import DigiClock from 'components/digi_clck.js';
import DatePage from 'components/date_page';
import TriageBubble from 'components/triage';
import ThemeChoice from 'components/theme_choice';
import ButtonsLine from 'components/buttons/buttons';
import Notepad from 'components/notepad/notepad';
import Media from 'components/media';
import Projects from 'components/projects/projects';
import LowerLine from 'components/lower_line';

function App() {
  const {theme, themeLoaded} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);

  const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 10000);//new state every 10 seconds 
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
        {/* <Media />  */}
        <Projects />
        <LowerLine />
      </div>
    </ThemeProvider>
  }
    </div>
  );
}

export default App;
