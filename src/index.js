import React from 'react';
import ReactDOM from 'react-dom/client';
// import Buton from './Buton';
import './index.css';
// import App from './App';
// import Navbar1 from './Navbar1';
import reportWebVitals from './reportWebVitals';
import Card1 from './Card1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Buton /> */}
    {/* <App /> */}
    {/* <Navbar1/>*/}
    <Card1/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
