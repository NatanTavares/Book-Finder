import React, { useState } from 'react';
import axios from 'axios';

import { BiSearch } from 'react-icons/bi';
import QrCode from '../../assets/frame.png';

import './styles.css';

export default function Header() {
  const [searchState, setSearchState] = useState('');

  const fetchApi = () => {
    if (!searchState) return alert('Empty');

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchState}`)
      .then(response => console.log('> response[fetchApi]:', response.data))
      // items[0].volumeInfo.imageLinks.smallThumbnail
      //items[0].volumeInfo.title
      // items[0].volumeInfo.authors
      // items[0].volumeInfo.publishedDate

      .catch(err => console.error('> err[fetchApi]:', err));
  }

  return (
    <div className="HeaderComponent">
      <h2>BooksFi</h2>

      <div className="searchBar">
        <input 
          type="text" 
          value={searchState}
          placeholder="Search by author, title, name"
          onChange={event => setSearchState(event.target.value)}
        />
        <button onClick={fetchApi}>
          <BiSearch id="searchIcon"/>
        </button>
      </div>

      <div className="perfil">
        <img 
          className="qrCode"
          src={QrCode} 
          alt="Qr Code to contact"
        />
      </div>
    </div>
  );
}
