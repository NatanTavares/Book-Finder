import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid #C4C4C4;
  padding: 12px 0 3px 0;
`;

export const ContentHeader = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;

export const InputOnHeader = styled.div`
  display: flex;
  align-items: center;
  
  width: 40vw;
  max-width: 500px;
  height: 30px;

  overflow: hidden;

  border: 1px solid #C4C4C4;
  border-radius: 15px;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  height: 100%;
  padding: 0 10px;

  border: none;
  outline: none;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  
  border: none;
  background: none;
  border-left: 1px solid #C4C4C4;

  outline: none;
  cursor: pointer;
`;

export const Grid = styled.div`
  max-width: 1300px;
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: .6rem;
  grid-row-gap: 1.2rem;

  justify-items: center;
  margin: 30px auto 0;
`;

const S = {
  Header,
  ContentHeader,
  InputOnHeader, 
  Input, 
  Button, 
  Grid,
}

export default S;
