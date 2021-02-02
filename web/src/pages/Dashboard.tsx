import React from 'react';
import { Link } from 'react-router-dom';

import { BiSearchAlt2 } from 'react-icons/bi';
import Logo from '../assets/googleIcon.png';
import styled from 'styled-components';

export default function Dashboard() {
  return (
    <>
      <Header>
        <Link to='/'>
          <img src={Logo} alt="Google" width={120} />
        </Link>


        <InputOnHeader>
          <Input 
            type="text"
            value={'test'}
            // onChange={event => setTerm(event.target.value)}
          />

          <Button onClick={() => console.log('> [Fetch api]: test')}>
            <BiSearchAlt2 size={20} color="#44F" />
          </Button>
        </InputOnHeader>
      </Header>

      <ul className="grid-books">
        {/* this list of books is loaded after it is obtained from the api*/}
        <li>
          <Link to='/detail:react.js'>React.js</Link>
        </li>

        <li>
          <Link to='/detail:node.js'>Node.js</Link>
        </li>

        <li>
          <Link to='/detail:next.js'>Next.js</Link>
        </li>

        <li>
          <Link to='/detail:next.js'>Angular.js</Link>
        </li>
      </ul>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 15px 30px 5px;

  border-bottom: 1px solid #C4C4C4;
`;

const InputOnHeader = styled.div`
  display: flex;
  align-items: center;
  
  width: 40vw;
  max-width: 500px;
  height: 30px;

  overflow: hidden;

  border: 1px solid #C4C4C4;
  border-radius: 15px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  height: 100%;
  padding: 0 10px;

  border: none;
  outline: none;
`;

const Button = styled.button`
  width: 34px;
  height: 40px;
  
  border: none;
  background: none;
  border-left: 1px solid #C4C4C4;

  outline: none;
  cursor: pointer;
`;
