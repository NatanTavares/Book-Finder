import React from 'react'
import { Link } from 'react-router-dom';

interface ICardProps {
  url: string;
  img?: string;
  volume: string;
}

export default function Card({ url, img = "#", volume }: ICardProps) {
  return (
    <div className="card">
      <Link to={url}>
        <img src={img} alt="book cover" />
        <h3>{volume}</h3>
      </Link>
    </div>
  );
}
