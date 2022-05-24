import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// pages
import CursorPage from './Pages/CursorPage/CursorPage';
import Home from './Pages/Home/index';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ContactPage from './Pages/ContactPage/ContactPage';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cursor' element={<CursorPage />} />
        <Route path='/aboutus' element={<AboutUsPage />} /> 
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
