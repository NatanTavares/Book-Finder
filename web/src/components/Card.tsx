import { Link } from "react-router-dom";

import Styled from "../styles/components/Card";

interface ICardProps {
  url: string;
  img?: string;
  volume: string;
}

export default function Card({ url, img = "#", volume }: ICardProps) {
  return (
    <Styled.StyledCard>
      <Link to={url} style={Styled.Link}>
        <Styled.Content>
          <Styled.Cover src={img} alt="book cover" />
          <h3>{volume}</h3>
        </Styled.Content>
      </Link>
    </Styled.StyledCard>
  );
}
