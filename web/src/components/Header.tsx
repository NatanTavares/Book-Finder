import { UseBook } from "../contexts/BookContext";
import { Link } from "react-router-dom";

import { BiSearchAlt2 } from "react-icons/bi";
import Logo from "../assets/googleIcon.png";

import Styled from "../styles/components/Header";

export default function Header() {
  const { term, handleTerm, fetchBooks } = UseBook();
  return (
    <Styled.Header>
      <Styled.ContentHeader>
        <Link to="/">
          <img src={Logo} alt="Google" width={120} />
        </Link>

        <Styled.InputOnHeader>
          <Styled.Input
            type="text"
            value={term}
            onChange={(event) => handleTerm(event.target.value)}
          />

          <Styled.Button onClick={fetchBooks}>
            <BiSearchAlt2 size={20} color="#44F" />
          </Styled.Button>
        </Styled.InputOnHeader>
      </Styled.ContentHeader>
    </Styled.Header>
  );
}
