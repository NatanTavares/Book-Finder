import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/index';

import { BiSearchAlt2 } from 'react-icons/bi';
import Logo from '../../assets/googleIcon.png';

export default function Dashboard() {
  return (
    <>
      <header>
        <Link to='/'>
          <img src={Logo} alt="Google" width={120} />
        </Link>

        <div>
          <input 
            type="text"
            value={'test'}
            // onChange={event => setTerm(event.target.value)}
          />

          <button onClick={() => console.log('> [Fetch api]: test')}>
            <BiSearchAlt2 size={20} color="#44F" />
          </button>
        </div>
      </header>

      <div>
        {/* <Card 
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
          url="/detail:typescript" 
          // img="#" 
          volume="Typescript"
        /> */}
      </div>
    </>
  );
}
