import { useSelector } from 'react-redux'
import styled from 'styled-components';

import { AppStore } from '../app/store'

const CardDetalleContainer = styled.div`
  border: 2px;
  width: 20%;
  border: 2px #D7DBDD solid;
  border-radius: 3px;
  padding: 10px;
  margin-right: 15%;
  height: 100%;
  min-width: 20%;
  margin-top: 2.5%;
`;

const CardDetailImage = styled.img`
  width: 90%;
  padding: 2%;
  margin: auto;
`;

const CardDetailText = styled.p`
  z-index: 1;
  text-align: justify;
  font-size: smaller;
  padding: 2%;
`;

const CardDetailSpan = styled.p`
  z-index: 1;
  text-align: justify;
  font-size: smaller;
  padding: 0 2%;
`;

interface Props {
  children: React.ReactNode
}

export default function CardDetail({ children }: Props) {
  return (
    <CardDetalleContainer>
      <CardDetailImage
        src=" https://cdn.pixabay.com/photo/2017/06/02/19/12/broken-link-2367103_1280.png"
        alt="imagen no encontrada" />
      <CardDetailSpan>{children}</CardDetailSpan>
      <CardDetailText>{children}</CardDetailText>
    </CardDetalleContainer>
  )
}
