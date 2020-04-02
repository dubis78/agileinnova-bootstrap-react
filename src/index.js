import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

import Navbar from './components/Navbar';
import Top_sect from './components/Top_sect';
import Speakers from './components/Speakers';
import Place_time from './components/Place_time';
import I_want_speaker from './components/I_want_speaker';
import Bottom_sect from './components/Bottom_sect';
import Buy_Ticket from './components/Buy-ticket';
ReactDOM.render(
  <React.StrictMode>
    
    <header>
        <Navbar/>
      </header>
      <main>
        <Top_sect/>
        <Speakers/>
        <Place_time/>
        <I_want_speaker/>
        <Buy-ticket/>
      </main>
      <footer>
        <Bottom_sect/>
      </footer>
  </React.StrictMode>,
  document.getElementById('root')
);



 