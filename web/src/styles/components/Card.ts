import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 70%;
  max-width: 200px;
  height: 260px;

  background-color: #f8f8f8;
  border-radius: 3px;
  box-shadow: 1px 1px 4px 2px #d0d0d0;

  transition: 0.4s;
  &:hover {
    background-color: #f0f0f0;
    box-shadow: 1px 1px 6px 3px #aaa;
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

  border: solid 1px #e1e1e1;
  border-radius: 4px;
`;

export const Volume = styled.h3`
  color: #333;
`;

export const Link = {
  textDecoration: "none",
  color: "#292426",
};

const Styled = {
  StyledCard,
  Content,
  Cover,
  Link,
};

export default Styled;
