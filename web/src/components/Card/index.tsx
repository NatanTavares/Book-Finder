import React from 'react'
import { Link } from 'react-router-dom';

import { StyledCard } from './styles';

interface ICardProps {
  url: string;
  img?: string;
  volume: string;
}

export default function Card({ url, img = "#", volume }: ICardProps) {
  return (
    <StyledCard>
        <Link to={url}>
          <img src={img} alt="book cover" />
          <h3>{volume}</h3>
        </Link>
    </StyledCard>
  );
}
