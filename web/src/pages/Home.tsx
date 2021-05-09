import { useState } from "react";

import Styled from "../styles/pages/Home";

import { BiSearchAlt2 } from "react-icons/bi";
import Logo from "../assets/googleIcon.png";

export default function Home() {
  const [term, setTerm] = useState("");

  return (
    <Styled.Section>
      <Styled.LogoSection>
        <img
          src={Logo}
          alt="Google"
          style={{ maxWidth: "272px", width: "90%" }}
        />
        <Styled.Span>Livros</Styled.Span>
      </Styled.LogoSection>

      <Styled.SearchBar>
        <Styled.Input
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />

        <Styled.SearchButton onClick={() => console.log(">[Fetch api]:", term)}>
          <BiSearchAlt2 size={20} color="#FFF" />
        </Styled.SearchButton>
      </Styled.SearchBar>

      <Styled.Paraph>
        O índice mais diversificado do mundo para pesquisar livros na íntegra.
      </Styled.Paraph>
    </Styled.Section>
  );
}
