import styled from "styled-components";

export const Grid = styled.div`
  max-width: 1300px;
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 0.6rem;
  grid-row-gap: 1.2rem;

  justify-items: center;
  margin: 30px auto 0;
`;

const Styled = {
  Grid,
};

export default Styled;
