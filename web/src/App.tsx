import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import Logo from './assets/googleIcon.png';

import './App.css';

export default function App() {
  const [term, setTerm] = useState('');

  return (
    <div className="App">
      <section>
        <div className="logo-section">
          <img src={Logo} alt="Google" width={272} />
          <span>Livros</span>
        </div>

        <div className="searchBar">
          <input 
            type="text"
            value={term}
            onChange={event => setTerm(event.target.value)}
          />

          <button>
            <BiSearchAlt2 size={20} color="#FFF" />
          </button>
        </div>

        <span>O índice mais diversificado do mundo para pesquisar livros na íntegra.</span>
      </section>

      <footer>
        <span>Developed by </span>
        <a href="https://linktr.ee/NatanTavares" target="blank">NTS Labs</a>
      </footer>
    </div>
  );
}
