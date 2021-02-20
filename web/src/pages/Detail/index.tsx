import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';

import { Title, Subtitle } from './styles';

interface IDetailProps {
  img?: string;
  volume: string;
}

export default function Detail() {
  const { volume, img= "#" } = useParams<IDetailProps>();

  return (
    <>
      <Header />

      <main>
        <img 
          src={'http://books.google.com/books/content?id=tDjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}
          alt="Cover book" 
        />

        <div className="aside">
          <h2>Title: "Learning React"</h2>
          <h3>Subtitle: "Modern Patterns for Developing React Apps"</h3>
          <h4>Authors: Alex Banks | Eve Porcello</h4>
          <h4>Categories: Computers</h4>
          <h4>data: 2020-06-12</h4>
          <h4>Language: En</h4>
          <h5>page count: <strong>310</strong></h5>
          <h5>publisher: O'Reilly Media</h5>

          <p>
            description: "If you want to learn how to build efficient React applications, this is your book. Ideal for web 
            developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated 
            edition provides best practices and patterns for writing modern React code. No prior knowledge of React or 
            functional JavaScript is necessary. With their learning road map, authors Alex Banks and Eve Porcello show you 
            how to create UIs that can deftly display changes without page reloads on large-scale, data-driven websites. 
            You’ll also discover how to work with functional programming and the latest ECMAScript features. Once you learn 
            how to build React components with this hands-on guide, you’ll understand just how useful React can be in your 
            organization. Understand key functional programming concepts with JavaScriptLook under the hood to learn how React 
            runs in the browserCreate application presentation layers with React componentsManage data and reduce the time you 
            spend debugging applicationsIncorporate React Hooks to manage state and fetch dataUse a routing solution for 
            single-page application featuresLearn how to structure React applications with servers in mind"
          </p>

          <a 
            href="http://books.google.com.br/books?id=tDjrDwAAQBAJ&dq=/react&hl=&source=gbs_api"
            target="blank"
            >info link </a>
        </div>
      </main>
    </>
  );
}
