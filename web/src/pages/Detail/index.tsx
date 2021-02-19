import React from 'react';
import { useParams } from 'react-router-dom';

import { Title, Subtitle } from './styles';

interface IDetailProps {
  volume: string;
}

export default function Detail() {
  const { volume } = useParams<IDetailProps>();

  return (
    <div>
      <Title>Detail</Title>
      <Subtitle>Volume{volume}</Subtitle>
    </div>
  );
}
