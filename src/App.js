import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

//Components
import Header from './Containers/Header/Header';

// Themes
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Themes/globalStyleThemes";
import { lightTheme, darkTheme } from "./Themes/themes";

function App() {

  // const para modificar themes
  const [theme, setTheme] = useState('light');
  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
    <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <button onClick={handleTheme}>Switch Theme</button>
      </>
    </ThemeProvider>
    </>
  );
}

export default App;
