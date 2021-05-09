import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  padding: 10vh 0;
  text-align: center;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 320px;
  margin: 28px auto 0;
`;

export const Span = styled.span`
  align-self: flex-end;
  margin-top: -16px;
  color: #42a6f8;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 800px;
  margin: 30px auto;
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 88%;
  max-width: 700px;
  height: 28px;
  padding: 1px 6px;

  border: 1px solid #ccc;

  font-size: 16px;
  outline: none;

  &:hover {
    border-color: #b0b0b0;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 74px;
  height: 32px;

  background-color: #4c8ffd;
  border: 1px solid #3079ed;
  cursor: pointer;

  &:hover {
    background-color: #3079ed;
    border: 1px solid #1463dd;
  }
`;

export const Paraph = styled.p`
  font-size: 14px;
`;

const Styled = {
  Section,
  LogoSection,
  Span,
  SearchBar,
  Input,
  SearchButton,
  Paraph,
};

export default Styled;
