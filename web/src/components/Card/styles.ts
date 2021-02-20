import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 70%;
  max-width: 200px;
  height: 260px;
  
  background-color: #F8F8F8;
  border-radius: 3px;
  box-shadow: 1px 1px 4px 2px #D0D0D0;
  
  transition: .4s;
  &:hover {
    background-color: #F0F0F0;
    box-shadow: 1px 1px 6px 3px #AAA;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 230px;
  text-align: center;
`;

export const Cover = styled.img`
  max-width: 150px;
  max-height: 196px;

  border: solid 1px #E1E1E1;
  border-radius: 4px;
`;

export const Volume = styled.h3`
  color: #333;
`;

export const Link = {
  textDecoration:'none',
  color: '#292426',
}

const S = {
  StyledCard,
  Content,
  Cover,
  Link
}

export default S;
