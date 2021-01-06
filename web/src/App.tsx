import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import Logo from './assets/googleIcon.png';

import './App.css';

export default function App() {
  const [term, setTerm] = useState('');

  return (
    <div className="App">
      <img src={Logo} alt="Google" width={200} />
      <span>Livros</span>

      <div className="searchBar">
        <input 
          type="text"
          value={term}
          onChange={event => setTerm(event.target.value)}
        />

        <button>
          <BiSearchAlt2 />
        </button>
      </div>

      <span>O índice mais diversificado do mundo para pesquisar livros na íntegra.</span>

      <footer>
        <p>NTS Labs</p>
      </footer>
    </div>
  );
}
