import React from 'react';

import './styles.css';

interface IProps {
  imageUrl?: string;
  title: string;
  author: string;
}


export default function Card({ imageUrl, title, author }: IProps) {
  return (
    <div className="CardComponent">
      <img src={imageUrl} alt="Thumbnail"/>
      
      <div className="stats">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <span>01-05-2019</span>
      </div>
    </div>
  );
}
