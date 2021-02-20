import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { BiSearchAlt2 } from 'react-icons/bi';
import Logo from '../../assets/googleIcon.png';
import S from './styles';

export default function Header() {
  const [term, setTerm] = useState('');

  return (
    <S.Header>
      <S.ContentHeader>
        <Link to='/'>
          <img src={Logo} alt="Google" width={120} />
        </Link>

        <S.InputOnHeader>
          <S.Input 
            type="text"
            value={term}
            onChange={event => setTerm(event.target.value)}
          />

          <S.Button onClick={() => console.log('> [Fetch api]: test')}>
            <BiSearchAlt2 size={20} color="#44F" />
          </S.Button>
        </S.InputOnHeader>
      </S.ContentHeader>
    </S.Header>
  );
}
