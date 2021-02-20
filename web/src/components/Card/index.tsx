import React from 'react'
import { Link } from 'react-router-dom';

import S from './styles';

interface ICardProps {
  url: string;
  img?: string;
  volume: string;
}

export default function Card({ url, img = "#", volume }: ICardProps) {
  return (
    <S.StyledCard>
        <Link to={url} style={S.Link}>
          <S.Content>
            <S.Cover src={img} alt="book cover" />
            <h3>{volume}</h3>
          </S.Content>
        </Link>
    </S.StyledCard>
  );
}
