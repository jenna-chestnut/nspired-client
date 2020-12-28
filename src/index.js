import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { WinWallProvider } from './contexts/WinWallContext';
import { GoalProvider } from './contexts/GoalContext';

ReactDOM.render(
  <BrowserRouter>
  <WinWallProvider><GoalProvider>
    
    <App />
    
  </GoalProvider></WinWallProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
