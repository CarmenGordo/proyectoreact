import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import GlobalStyle from './globalStyle';

//Components
import Header from './Containers/Header/Header';

import { ThemeContext } from './Context/ThemeContext';
import { useTheme } from './Hooks/useTheme';

function App() {

  const theme = useTheme(); 

  return (
    <>
    <ThemeContext.Provider value={theme}>
      <Header/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
