import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/index';

import { BiSearchAlt2 } from 'react-icons/bi';
import Logo from '../../assets/googleIcon.png';
import S from './styles';

export default function Dashboard() {
  const [term, setTerm] = useState('');

  return (
    <>
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

      <S.Grid>
        <Card 
          url="/detail:react"
          // img="#"
          volume="React"
        />

        <Card 
          url="/detail:node.js" 
          // img="#" 
          volume="Node.js"
        />

        <Card 
          url="/detail:next.js" 
          // img="#"
          volume="Next.js"
        />

        <Card 
          url="/detail:angular.js" 
          // img="#" 
          volume="Angular.js"
        />

        <Card 
          url="/detail:vue.js" 
          // img="#" 
          volume="Vue.js"
        />
      
        <Card 
          url="/detail:react native.js" 
          // img="#" 
          volume="React Native"
        />
        
        <Card 
          url="/detail:typescript" 
          // img="#" 
          volume="Typescript"
        />

        <Card 
          url="/detail:node" 
          // img="#" 
          volume="Node"
        />

        <Card 
          url="/detail:orm" 
          // img="#" 
          volume="ORM"
        />

        <Card 
          url="/detail:mongodb" 
          // img="#" 
          volume="MongoDB"
        />
      </S.Grid>
    </>
  );
}
