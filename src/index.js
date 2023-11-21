import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img from './Image/img.avif';
import Class_demo from './Class_demo';
import Newtheme from './Newtheme';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Class_demo imgUrl={img} item="Common Projects Bball High" desc="$549" count1="0"/>
  <Class_demo imgUrl={img} item="Maison Margiela Future Sneakers" desc="$870" count1="0"/>
  <Class_demo imgUrl={img} item="Our legacy Brushed Scarf" desc="$349" count1="0"/>
  <Newtheme/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
