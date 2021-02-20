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

const S = {
  Header,
  ContentHeader,
  InputOnHeader, 
  Input, 
  Button
}

export default S;