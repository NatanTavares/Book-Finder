import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 15px 30px 5px;

  border-bottom: 1px solid #C4C4C4;
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
  width: 34px;
  height: 40px;
  
  border: none;
  background: none;
  border-left: 1px solid #C4C4C4;

  outline: none;
  cursor: pointer;
`;

export const Grid = styled.div`
  width: 100vw;

  background-color: blue;
`;

export const GridOfBooks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  list-style: none;
  
  max-width: 1000px;
  margin: auto;
  padding: 0;
  
  background-color: yellow;

`;

export const ItemOfGrid = styled.li`
  margin: 30px 0;
  padding:0;

  background-color: red;
`;

const styles = {
  Header, 
  InputOnHeader, 
  Input, 
  Button, 
  Grid, 
  GridOfBooks, 
  ItemOfGrid
}

export default styles;
