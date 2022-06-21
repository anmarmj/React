import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';

const CardSize = 200;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='tc'>
      <h1 className='fw4'>Welcome to the robot town</h1>
      {robots.map(number => <Card cardsize={CardSize} id={number.id} name={number.name} username={number.username} email={number.email} />)}


    </div>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
