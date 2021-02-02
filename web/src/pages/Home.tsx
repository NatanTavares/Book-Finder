import React, { useState } from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import Logo from '../assets/googleIcon.png';

export default function Home() {
  const [term, setTerm] = useState('');

  return (
    <>
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

          <button onClick={() => console.log('> [Fetch api]:', term)}>
            <BiSearchAlt2 size={20} color="#FFF" />
          </button>
        </div>

        <span>O índice mais diversificado do mundo para pesquisar livros na íntegra.</span>
      </section>
    </>
  );
}
