import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

interface IDetailProps {
  volume: string;
}

export default function Detail() {
  const { volume } = useParams<IDetailProps>();

  return (
    <div>
      <Title>Detail</Title>
      <SubTitle>Volume{volume}</SubTitle>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.6em;
  text-align: center;
  color: #333;
`;

const SubTitle = styled.h2`
font-size: 1.2em;
text-align: center;
color: #44F;
`;

