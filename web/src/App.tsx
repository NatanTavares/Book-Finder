import React from 'react';
import Header from './components/Header';
import ListOfCards from './components/ListOfCards';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <ListOfCards size={1} />
    </div>
  );
}
